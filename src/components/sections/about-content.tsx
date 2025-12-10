import Link from 'next/link';

export default function AboutContent() {
  return (
    <section className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Content */}
          <div>
            <h2 className='text-4xl font-bold text-[#0A2540] mb-6'>
              About Craig Ranch Vegas Homes
            </h2>
            <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
              We are your trusted partner in finding the perfect home in one of
              Las Vegas&apos; most prestigious communities. With years of
              experience in the Craig Ranch area, we understand what makes this
              neighborhood special.
            </p>
            <p className='text-lg text-gray-600 mb-8 leading-relaxed'>
              Our team of dedicated real estate professionals is committed to
              providing exceptional service, expert guidance, and personalized
              attention to every client. Whether you&apos;re buying, selling, or
              investing, we&apos;re here to help you achieve your real estate
              goals.
            </p>

            {/* Key Features */}
            <div className='space-y-4 mb-8'>
              <div className='flex items-center'>
                <div className='w-6 h-6 bg-[#16B286] rounded-full flex items-center justify-center mr-4'>
                  <svg
                    className='w-4 h-4 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </div>
                <span className='text-[#0A2540] font-medium'>
                  Local Market Expertise
                </span>
              </div>
              <div className='flex items-center'>
                <div className='w-6 h-6 bg-[#16B286] rounded-full flex items-center justify-center mr-4'>
                  <svg
                    className='w-4 h-4 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </div>
                <span className='text-[#0A2540] font-medium'>
                  Personalized Service
                </span>
              </div>
              <div className='flex items-center'>
                <div className='w-6 h-6 bg-[#16B286] rounded-full flex items-center justify-center mr-4'>
                  <svg
                    className='w-4 h-4 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </div>
                <span className='text-[#0A2540] font-medium'>
                  Advanced Technology
                </span>
              </div>
              <div className='flex items-center'>
                <div className='w-6 h-6 bg-[#16B286] rounded-full flex items-center justify-center mr-4'>
                  <svg
                    className='w-4 h-4 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </div>
                <span className='text-[#0A2540] font-medium'>
                  Proven Track Record
                </span>
              </div>
            </div>

            <Link
              href='http://drjanduffy.realscout.com/onboarding'
              className='bg-[#3A8DDE] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2A7DCE] transition-colors duration-200 inline-block'
            >
              Learn More About Us
            </Link>
          </div>

          {/* Stats/Image Placeholder */}
          <div className='bg-[#F7F9FC] rounded-xl p-8'>
            <div className='text-center'>
              <div className='grid grid-cols-2 gap-8 mb-8'>
                <div>
                  <div className='text-3xl font-bold text-[#0A2540] mb-2'>
                    500+
                  </div>
                  <div className='text-gray-600'>Homes Sold</div>
                </div>
                <div>
                  <div className='text-3xl font-bold text-[#0A2540] mb-2'>
                    15+
                  </div>
                  <div className='text-gray-600'>Years Experience</div>
                </div>
                <div>
                  <div className='text-3xl font-bold text-[#0A2540] mb-2'>
                    98%
                  </div>
                  <div className='text-gray-600'>Client Satisfaction</div>
                </div>
                <div>
                  <div className='text-3xl font-bold text-[#0A2540] mb-2'>
                    24/7
                  </div>
                  <div className='text-gray-600'>Support Available</div>
                </div>
              </div>

              {/* Placeholder for team image */}
              <div className='bg-gradient-to-br from-[#0A2540] to-[#3A8DDE] rounded-lg p-8 text-white text-center'>
                <div className='text-4xl mb-4'>👥</div>
                <h3 className='text-xl font-semibold mb-2'>Our Team</h3>
                <p className='text-gray-200'>
                  Meet our experienced real estate professionals dedicated to
                  serving Craig Ranch
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
