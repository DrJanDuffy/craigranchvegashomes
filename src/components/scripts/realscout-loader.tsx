'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function RealScoutLoader() {
  useEffect(() => {
    // Dispatch event when RealScout is loaded
    const handleLoad = () => {
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('realscout-loaded'));
      }
    };

    // Check if script is already loaded
    const script = document.querySelector('script[src*="realscout-web-components"]');
    if (script) {
      handleLoad();
    }
  }, []);

  return (
    <Script
      id='realscout-script'
      src='https://em.realscout.com/widgets/realscout-web-components.umd.js'
      type='module'
      strategy='afterInteractive'
      onLoad={() => {
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new Event('realscout-loaded'));
        }
      }}
    />
  );
}

