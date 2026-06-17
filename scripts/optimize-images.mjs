/**
 * Audita y optimiza imágenes en src/assets.
 * Convierte JPG/PNG a WebP cuando reduce peso sin pérdida visual relevante.
 */
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const ASSETS_DIR = path.join(ROOT, 'src', 'assets');
const REPORT_PATH = path.join(__dirname, 'asset-audit-report.json');

const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif']);
const CONVERT_EXT = new Set(['.jpg', '.jpeg', '.png']);
const MIN_REPORT_BYTES = 150 * 1024;
const WEBP_QUALITY = 82;

const BRAND_RULES = [
  { match: /[\\/]logo\.png$/i, maxWidth: 512, quality: 88 },
  { match: /[\\/]icon\.png$/i, maxWidth: 256, quality: 88 },
  { match: /[\\/]zt\.png$/i, maxWidth: 256, quality: 88 },
  { match: /[\\/]fondo\.png$/i, maxWidth: 1200, quality: 80 },
];

function walkFiles(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkFiles(full, acc);
    else if (IMAGE_EXT.has(path.extname(entry.name).toLowerCase())) acc.push(full);
  }
  return acc;
}

function rel(filePath) {
  return path.relative(ROOT, filePath).replace(/\\/g, '/');
}

function hashFile(filePath) {
  const buffer = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(buffer).digest('hex');
}

function getBrandRule(filePath) {
  const normalized = filePath.replace(/\\/g, '/');
  return BRAND_RULES.find((rule) => rule.match.test(normalized));
}

function isUsedAsset(relPath) {
  const p = relPath.replace(/\\/g, '/');
  if (/^src\/assets\/hero\//.test(p)) return true;
  if (/^src\/assets\/caminatas\//.test(p)) return true;
  if (p === 'src/assets/logo.png' || p === 'src/assets/logo.webp') return true;
  if (p === 'src/assets/icon.png' || p === 'src/assets/icon.webp') return true;
  if (p === 'src/assets/zt.png' || p === 'src/assets/zt.webp') return true;
  if (p === 'src/assets/fondo.png' || p === 'src/assets/fondo.webp') return true;
  return false;
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!CONVERT_EXT.has(ext)) return null;

  const originalSize = fs.statSync(filePath).size;
  const brandRule = getBrandRule(filePath);
  const maxWidth = brandRule?.maxWidth ?? 1400;
  const quality = brandRule?.quality ?? WEBP_QUALITY;

  let pipeline = sharp(filePath).rotate();
  const meta = await pipeline.metadata();

  if (meta.width && meta.width > maxWidth) {
    pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
  }

  const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const webpBuffer = await pipeline.webp({ quality, effort: 4 }).toBuffer();
  const webpSize = webpBuffer.length;

  const isBrand = Boolean(brandRule);
  const shouldReplace = isBrand || webpSize < originalSize * 0.97;

  if (!shouldReplace) {
    return {
      path: rel(filePath),
      status: 'skipped',
      reason: 'WebP no redujo tamaño de forma significativa',
      originalBytes: originalSize,
      webpBytes: webpSize,
    };
  }

  fs.writeFileSync(webpPath, webpBuffer);

  if (webpPath !== filePath && fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }

  return {
    path: rel(filePath),
    output: rel(webpPath),
    status: 'converted',
    originalBytes: originalSize,
    optimizedBytes: webpSize,
    savedBytes: originalSize - webpSize,
    savedPercent: Number((((originalSize - webpSize) / originalSize) * 100).toFixed(1)),
    maxWidthApplied: meta.width && meta.width > maxWidth ? maxWidth : null,
    quality,
  };
}

function folderSize(dir) {
  if (!fs.existsSync(dir)) return 0;
  let total = 0;
  for (const file of walkFiles(dir)) {
    total += fs.statSync(file).size;
  }
  return total;
}

async function main() {
  const files = walkFiles(ASSETS_DIR);
  const beforeBytes = folderSize(ASSETS_DIR);

  const hashMap = new Map();
  for (const file of files) {
    const hash = hashFile(file);
    const key = rel(file);
    if (!hashMap.has(hash)) hashMap.set(hash, []);
    hashMap.get(hash).push(key);
  }

  const duplicates = [...hashMap.entries()]
    .filter(([, paths]) => paths.length > 1)
    .map(([hash, paths]) => ({ hash: hash.slice(0, 16), files: paths }));

  const unused = files
    .map(rel)
    .filter((p) => !isUsedAsset(p));

  const over150kb = files
    .map((file) => ({
      path: rel(file),
      bytes: fs.statSync(file).size,
      kb: Number((fs.statSync(file).size / 1024).toFixed(1)),
    }))
    .filter((item) => item.bytes > MIN_REPORT_BYTES)
    .sort((a, b) => b.bytes - a.bytes);

  const brandHeavy = files
    .filter((file) => getBrandRule(file) || /[\\/](logo|icon|zt|fondo)\./i.test(file))
    .map((file) => ({
      path: rel(file),
      bytes: fs.statSync(file).size,
      kb: Number((fs.statSync(file).size / 1024).toFixed(1)),
    }))
    .sort((a, b) => b.bytes - a.bytes);

  const conversions = [];
  for (const file of files) {
    if (!CONVERT_EXT.has(path.extname(file).toLowerCase())) continue;
    const result = await optimizeImage(file);
    if (result) conversions.push(result);
  }

  const afterFiles = walkFiles(ASSETS_DIR);
  const afterBytes = folderSize(ASSETS_DIR);

  const converted = conversions.filter((c) => c.status === 'converted');
  const totalSaved = converted.reduce((sum, c) => sum + c.savedBytes, 0);

  const report = {
    generatedAt: new Date().toISOString(),
    summary: {
      imagesScanned: files.length,
      imagesOver150KB: over150kb.length,
      converted: converted.length,
      skipped: conversions.filter((c) => c.status === 'skipped').length,
      duplicates: duplicates.length,
      unused: unused.length,
      orphanAssets: unused,
      beforeBytes,
      afterBytes,
      savedBytes: beforeBytes - afterBytes,
      savedPercent: Number((((beforeBytes - afterBytes) / beforeBytes) * 100).toFixed(1)),
    },
    over150KB: over150kb,
    brandAssets: brandHeavy,
    duplicates,
    unused,
    conversions,
  };

  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));

  console.log('=== Auditoría de assets ===');
  console.log(`Imágenes analizadas: ${files.length}`);
  console.log(`> 150 KB: ${over150kb.length}`);
  console.log(`Convertidas a WebP: ${converted.length}`);
  console.log(`Duplicados (grupos): ${duplicates.length}`);
  console.log(`No referenciadas: ${unused.length}`);
  console.log(`Peso src/assets antes: ${(beforeBytes / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Peso src/assets después: ${(afterBytes / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Ahorro en assets: ${(totalSaved / 1024 / 1024).toFixed(2)} MB (${report.summary.savedPercent}%)`);
  console.log(`Informe: ${rel(REPORT_PATH)}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
