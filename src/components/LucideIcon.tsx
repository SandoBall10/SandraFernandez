import React from 'react';
import * as Icons from 'lucide-react';

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className = '', size = 24 }: LucideIconProps) {
  // Retrieve the component from matching Lucide exports safely
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) {
    // Fallback icon if there's any mismatch
    return <Icons.HelpCircle className={className} size={size} />;
  }
  return <IconComponent className={className} size={size} />;
}
