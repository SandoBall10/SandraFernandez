import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import favicon from './assets/icon.webp';

const faviconLink = document.querySelector<HTMLLinkElement>("link[rel='icon']");
if (faviconLink) {
  faviconLink.href = favicon;
  faviconLink.type = 'image/png';
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
