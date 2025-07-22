'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className='relative h-screen flex items-center justify-center overflow-hidden'>
      {/* Background Overlay */}
      <div className='absolute inset-0 bg-gradient-to-r from-[#0A2540]/80 to-[#3A8DDE]/60'></div>
      
      {/* Hero Content */}
      <div className='relative z-10 text-center text-white max-w-4xl mx-auto px-4'>
        <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
          Find Your Dream Home in
          <span className='block text-[#16B286] mt-2'>Craig Ranch</span>
        </h1>
        
        <p className='text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed'>
          Discover luxury living in one of Las Vegas&apos; most prestigious
          communities
        </p>
        
        {/* Hero CTA Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Link 
            href="http://drjanduffy.realscout.com/onboarding"
            className='bg-[#16B286] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#15A276] transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
          >
            View Available Homes
          </Link>
          <Link 
            href="http://drjanduffy.realscout.com/onboarding"
            className='bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/30 transition-colors duration-200 border border-white/30 hover:border-white/50'
          >
            Schedule a Tour
          </Link>
        </div>
      </div>
    </section>
  );
} 