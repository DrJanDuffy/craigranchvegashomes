import { Suspense } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import PageLayout from '@/components/layout/page-layout';
import GoogleMap from '@/components/sections/google-map';
import MapSkeleton from '@/components/skeletons/map-skeleton';
import { Button } from '@/components/ui/button';
import { generateMetadata as genMetadata, generateLocalBusinessSchema, generateWebPageSchema, generateBreadcrumbSchema } from '@/lib/metadata';

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.craigranchhomes.com'
).replace(/\/$/, '');

export const metadata = genMetadata({
  title:
    'Craig Ranch Vegas | Homes By Dr. Jan Duffy - Office Location (North Las Vegas, NV)',
  description:
    'Visit Craig Ranch Vegas | Homes By Dr. Jan Duffy at 851 W Lone Mountain Rd, North Las Vegas, NV 89032. Get directions, call, and view office hours.',
  keywords:
    'real estate office North Las Vegas, Dr. Jan Duffy office, 851 W Lone Mountain Rd, Craig Ranch Vegas',
  path: '/location',
});

export default function LocationPage() {
  return (
    <PageLayout>
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-10'>
            <h1 className='text-4xl md:text-5xl font-bold text-[#0A2540] mb-4'>
              Office Location
            </h1>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              <strong>Craig Ranch Vegas | Homes By Dr. Jan Duffy</strong> —{' '}
              <span className='whitespace-nowrap'>
                851 W Lone Mountain Rd, North Las Vegas, NV 89032
              </span>
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-10 items-start'>
            <div className='space-y-6'>
              <div className='rounded-xl border border-gray-200 bg-[#F7F9FC] p-6'>
                <h2 className='text-2xl font-bold text-[#0A2540] mb-4'>
                  Contact & Directions
                </h2>
                <div className='space-y-2 text-gray-700'>
                  <p>
                    <strong>Phone:</strong>{' '}
                    <a
                      href='tel:7025001955'
                      className='text-[#3A8DDE] hover:underline'
                    >
                      (702) 500-1955
                    </a>
                  </p>
                  <p>
                    <strong>Address:</strong> 851 W Lone Mountain Rd, North Las
                    Vegas, NV 89032
                  </p>
                </div>

                <div className='mt-6 flex flex-col sm:flex-row gap-3'>
                  <Button asChild className='bg-[#16B286] hover:bg-[#15A276] text-white'>
                    <a href='tel:7025001955'>Call Now</a>
                  </Button>
                  <Button asChild variant='outline'>
                    <Link href='https://www.google.com/maps/search/?api=1&query=851+W+Lone+Mountain+Rd+North+Las+Vegas+NV+89032' target='_blank' rel='noopener noreferrer' prefetch={false}>
                      Get Directions
                    </Link>
                  </Button>
                  <Button asChild variant='outline'>
                    <Link href='https://www.google.com/maps/search/?api=1&query=851+W+Lone+Mountain+Rd+North+Las+Vegas+NV+89032' target='_blank' rel='noopener noreferrer' prefetch={false}>
                      View Google Reviews
                    </Link>
                  </Button>
                </div>
              </div>

              <div className='rounded-xl border border-gray-200 bg-white p-6'>
                <h2 className='text-2xl font-bold text-[#0A2540] mb-4'>
                  Office Hours
                </h2>
                <div className='space-y-2 text-gray-700'>
                  <div className='flex justify-between'>
                    <span>Monday – Friday</span>
                    <span className='font-semibold'>9:00 AM – 6:00 PM</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Saturday</span>
                    <span className='font-semibold'>10:00 AM – 4:00 PM</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Sunday</span>
                    <span className='font-semibold'>By Appointment</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='rounded-xl overflow-hidden border border-gray-200 bg-white'>
              <Suspense fallback={<MapSkeleton />}>
                <GoogleMap
                  address='851 W Lone Mountain Rd, North Las Vegas, NV 89032'
                  latitude={36.2465}
                  longitude={-115.1475}
                  zoom={14}
                  height='520px'
                  title='Craig Ranch Vegas | Homes By Dr. Jan Duffy Office Location'
                />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      <Script
        id='location-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateLocalBusinessSchema(),
            generateWebPageSchema({
              name: 'Office Location - Craig Ranch Vegas | Homes By Dr. Jan Duffy',
              description:
                'Visit our North Las Vegas office at 851 W Lone Mountain Rd, North Las Vegas, NV 89032.',
              url: `${baseUrl}/location`,
              breadcrumb: [
                { name: 'Home', url: baseUrl },
                { name: 'Location', url: `${baseUrl}/location` },
              ],
            }),
            generateBreadcrumbSchema([
              { name: 'Home', url: baseUrl },
              { name: 'Location', url: `${baseUrl}/location` },
            ]),
          ]),
        }}
      />
    </PageLayout>
  );
}

