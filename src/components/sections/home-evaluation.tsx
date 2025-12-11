'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

// Extend Window interface for Homebot
declare global {
  interface Window {
    __hb_namespace?: string;
    Homebot?: (selector: string, apiKey: string) => void;
  }
}

export default function HomeEvaluationSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [isScriptReady, setIsScriptReady] = useState(false);

  useEffect(() => {
    // Initialize Homebot widget loader
    if (typeof window !== 'undefined' && !window.__hb_namespace) {
      (function (h: string, b: string) {
        const w = window as any;
        const d = document;
        const s = 'script';
        w['__hb_namespace'] = h;
        w[h] =
          w[h] ||
          function (...args: any[]) {
            (w[h].q = w[h].q || []).push(args);
          };
        const y = d.createElement(s) as HTMLScriptElement;
        const x = d.getElementsByTagName(s)[0];
        y.async = true;
        y.src = b;
        if (x && x.parentNode) {
          x.parentNode.insertBefore(y, x);
        }
      })('Homebot', 'https://embed.homebotapp.com/lgw/v1/widget.js');
    }
  }, []);

  useEffect(() => {
    // Initialize widget once script is ready
    if (isScriptReady) {
      const initWidget = () => {
        const w = window as any;
        if (w.Homebot) {
          try {
            w.Homebot(
              '#homebot_homeowner',
              '35de8cf0a487cf0fec06278f2023805ea02eba0b58960a43'
            );
            setIsLoading(false);
          } catch (error) {
            console.error('Error initializing Homebot widget:', error);
            setIsLoading(false);
          }
        } else {
          // Retry after a short delay if Homebot isn't ready yet
          setTimeout(initWidget, 500);
        }
      };

      // Small delay to ensure script is fully loaded
      const timer = setTimeout(initWidget, 100);
      return () => clearTimeout(timer);
    }
  }, [isScriptReady]);

  return (
    <section className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-[#0A2540] mb-4'>
            Get Your Home&apos;s Value
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Discover what your Craig Ranch property is worth with our advanced
            evaluation tools
          </p>
        </div>

        {/* Homebot Widget */}
        <div className='max-w-2xl mx-auto'>
          <div className='bg-[#F7F9FC] rounded-xl p-8 shadow-lg'>
            {isLoading && (
              <div className='space-y-4 animate-pulse'>
                <div className='h-8 bg-gray-200 rounded w-3/4 mx-auto'></div>
                <div className='h-4 bg-gray-200 rounded w-1/2 mx-auto'></div>
                <div className='h-64 bg-gray-200 rounded mt-6'></div>
                <div className='h-12 bg-gray-200 rounded w-1/3 mx-auto'></div>
              </div>
            )}
            <div
              id='homebot_homeowner'
              className={isLoading ? 'hidden' : ''}
            ></div>
          </div>
        </div>
      </div>

      {/* Load Homebot widget script */}
      <Script
        src='https://embed.homebotapp.com/lgw/v1/widget.js'
        strategy='lazyOnload'
        onLoad={() => setIsScriptReady(true)}
      />
    </section>
  );
}
