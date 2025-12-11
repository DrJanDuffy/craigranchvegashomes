'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Drone photo background from public directory
  const backgroundImage = '/54-DJI_20250707171528_0828_D.jpg';

  return (
    <section className='relative h-screen flex items-center justify-center overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 w-full h-full'>
        {/* Fallback gradient background */}
        <div className='absolute inset-0 bg-linear-to-r from-[#0A2540] to-[#3A8DDE]'></div>

        {/* Hero Background Image */}
        <div className='absolute inset-0 w-full h-full'>
          <Image
            src={backgroundImage}
            alt='Craig Ranch neighborhood aerial view'
            fill
            priority
            className={`object-cover transition-opacity duration-1000 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            sizes='100vw'
            quality={90}
            onLoad={() => setImageLoaded(true)}
            aria-hidden='true'
          />
        </div>

        {/* Video Embed Option - Uncomment if you want to use the homes.com video */}
        {/* 
        <iframe
          src='https://www.homes.com/local-guide/north-las-vegas-nv/craig-ranch-neighborhood/video/jjc2l3y321hql/?autoplay=1&mute=1&loop=1&controls=0&playsinline=1'
          className='absolute inset-0 w-full h-full object-cover'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='Craig Ranch Neighborhood Video Background'
          aria-hidden='true'
        />
        */}
      </div>

      {/* Background Overlay - Darkens image for text readability */}
      <div className='absolute inset-0 bg-linear-to-r from-[#0A2540]/80 to-[#3A8DDE]/60 z-1'></div>

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
            href='http://drjanduffy.realscout.com/onboarding'
            target='_blank'
            rel='noopener noreferrer'
            prefetch={false}
            className='bg-[#16B286] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#15A276] transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
          >
            View Available Homes
          </Link>
          <Link
            href='http://drjanduffy.realscout.com/onboarding'
            target='_blank'
            rel='noopener noreferrer'
            prefetch={false}
            className='bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/30 transition-colors duration-200 border border-white/30 hover:border-white/50'
          >
            Schedule a Tour
          </Link>
        </div>
      </div>
    </section>
  );
}
