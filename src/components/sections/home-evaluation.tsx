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

  // Set up Homebot namespace and queue function (without loading script)
  // IMPORTANT: This only sets up the namespace/queue - it does NOT load the script
  // The script is loaded ONLY via the Next.js Script component below
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.__hb_namespace) {
      const w = window as any;
      w['__hb_namespace'] = 'Homebot';
      w['Homebot'] =
        w['Homebot'] ||
        function (...args: any[]) {
          (w['Homebot'].q = w['Homebot'].q || []).push(args);
        };
    }
    // No script loading here - that's handled by the Script component below
  }, []);

  // Initialize widget once script is loaded
  useEffect(() => {
    if (isScriptReady) {
      const initWidget = () => {
        const w = window as any;
        if (w.Homebot && typeof w.Homebot === 'function') {
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
          setTimeout(initWidget, 200);
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

      {/* Load Homebot widget script via Next.js Script component */}
      <Script
        src='https://embed.homebotapp.com/lgw/v1/widget.js'
        strategy='lazyOnload'
        onLoad={() => setIsScriptReady(true)}
        onError={() => {
          console.error('Failed to load Homebot script');
          setIsLoading(false);
        }}
      />
    </section>
  );
}