'use client';

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className='bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo/Brand */}
          <div className='flex items-center'>
            <h1 className='text-2xl font-bold text-[#0A2540]'>
              Craig Ranch Vegas Homes
            </h1>
          </div>

          {/* Navigation Links */}
          <div className='hidden md:flex space-x-8'>
            <a
              href='#homes'
              className='text-[#0A2540] hover:text-[#3A8DDE] transition-colors duration-200'
            >
              Homes
            </a>
            <a
              href='#neighborhood'
              className='text-[#0A2540] hover:text-[#3A8DDE] transition-colors duration-200'
            >
              Neighborhood
            </a>
            <a
              href='#contact'
              className='text-[#0A2540] hover:text-[#3A8DDE] transition-colors duration-200'
            >
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <Link 
            href="http://drjanduffy.realscout.com/onboarding"
            className='bg-[#3A8DDE] text-white px-6 py-2 rounded-lg hover:bg-[#2A7DCE] transition-colors duration-200 font-medium'
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
} 