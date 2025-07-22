'use client';

import { useEffect } from 'react';

export default function HomeEvaluationSection() {
  useEffect(() => {
    // Load Homebot script
    const script = document.createElement('script');
    script.innerHTML = `
      (function (h,b) { 
        var w = window, d = document, s = 'script', x, y; 
        w['__hb_namespace'] = h; 
        w[h] = w[h] || function () { (w[h].q=w[h].q||[]).push(arguments) }; 
        y = d.createElement(s); 
        x = d.getElementsByTagName(s)[0]; 
        y.async = 1; 
        y.src = b; 
        x.parentNode.insertBefore(y,x) 
      })('Homebot','https://embed.homebotapp.com/lgw/v1/widget.js');
      
      // Initialize Homebot widget
      setTimeout(() => {
        if (window.Homebot) {
          window.Homebot('#homebot_homeowner', '35de8cf0a487cf0fec06278f2023805ea02eba0b58960a43');
        }
      }, 1000);
    `;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const scripts = document.querySelectorAll('script');
      scripts.forEach(s => {
        if (s.innerHTML.includes('Homebot')) {
          s.remove();
        }
      });
    };
  }, []);

  return (
    <section className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-[#0A2540] mb-4'>
            Get Your Home&apos;s Value
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Discover what your Craig Ranch property is worth with our advanced evaluation tools
          </p>
        </div>

        {/* Homebot Widget */}
        <div className='max-w-2xl mx-auto'>
          <div className='bg-[#F7F9FC] rounded-xl p-8 shadow-lg'>
            <div id="homebot_homeowner"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 