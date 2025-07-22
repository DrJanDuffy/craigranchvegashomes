'use client';

import Link from 'next/link';

export default function HomeEvaluationSection() {
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

        {/* Evaluation Form */}
        <div className='max-w-2xl mx-auto'>
          <div className='bg-[#F7F9FC] rounded-xl p-8 shadow-lg'>
            <form className='space-y-6'>
              <div>
                <label htmlFor='address' className='block text-sm font-medium text-[#0A2540] mb-2'>
                  Property Address
                </label>
                <input
                  type='text'
                  id='address'
                  name='address'
                  placeholder='Enter your property address'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DDE] focus:border-transparent'
                />
              </div>
              
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <label htmlFor='bedrooms' className='block text-sm font-medium text-[#0A2540] mb-2'>
                    Bedrooms
                  </label>
                  <select
                    id='bedrooms'
                    name='bedrooms'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DDE] focus:border-transparent'
                  >
                    <option value=''>Select</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5+'>5+</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor='bathrooms' className='block text-sm font-medium text-[#0A2540] mb-2'>
                    Bathrooms
                  </label>
                  <select
                    id='bathrooms'
                    name='bathrooms'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DDE] focus:border-transparent'
                  >
                    <option value=''>Select</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5+'>5+</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor='squareFeet' className='block text-sm font-medium text-[#0A2540] mb-2'>
                  Square Feet
                </label>
                <input
                  type='number'
                  id='squareFeet'
                  name='squareFeet'
                  placeholder='Enter square footage'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DDE] focus:border-transparent'
                />
              </div>
              
              <Link
                href="http://drjanduffy.realscout.com/onboarding"
                className='w-full bg-[#16B286] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#15A276] transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 block text-center'
              >
                Get Free Evaluation
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 