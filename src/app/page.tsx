import { Metadata } from 'next';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import PageLayout from '@/components/layout/page-layout';
import Hero from '@/components/sections/hero';
import HomeEvaluationSection from '@/components/sections/home-evaluation';
import PropertyCategories from '@/components/sections/property-categories';
import FeaturedCommunities from '@/components/sections/featured-communities';
import BlogPosts from '@/components/sections/blog-posts';
import RealScoutOfficeWidget from '@/components/sections/realscout-office-widget';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Home as HomeIcon, MapPin, TrendingUp } from 'lucide-react';

// Dynamically import heavy components with loading states
const DynamicHomeEvaluation = dynamic(
  () => import('@/components/sections/home-evaluation'),
  {
    loading: () => (
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='h-10 w-64 bg-gray-200 animate-pulse rounded mx-auto mb-4'></div>
            <div className='h-6 w-96 bg-gray-200 animate-pulse rounded mx-auto'></div>
          </div>
          <div className='max-w-2xl mx-auto'>
            <div className='h-96 bg-gray-100 animate-pulse rounded-xl'></div>
          </div>
        </div>
      </section>
    ),
    ssr: true,
  }
);

const DynamicBlogPosts = dynamic(
  () => import('@/components/sections/blog-posts'),
  {
    loading: () => (
      <section className='py-20 bg-[#F7F9FC]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='h-10 w-64 bg-gray-200 animate-pulse rounded mx-auto mb-12'></div>
          <div className='grid md:grid-cols-3 gap-6'>
            {[1, 2, 3].map((i) => (
              <div key={i} className='h-96 bg-gray-100 animate-pulse rounded-lg'></div>
            ))}
          </div>
        </div>
      </section>
    ),
    ssr: true,
  }
);

export const metadata: Metadata = {
  title: 'Craig Ranch Vegas Homes | Luxury Real Estate in Las Vegas, Nevada',
  description:
    "Find your dream home in Craig Ranch, Las Vegas. Browse luxury homes, explore the neighborhood, and discover why Craig Ranch is one of Las Vegas' most prestigious communities.",
  keywords:
    'Craig Ranch, Las Vegas real estate, luxury homes, Las Vegas homes for sale, North Las Vegas, Nevada real estate',
};

export default function Home() {
  return (
    <PageLayout>
      <article>
        <Hero />

        {/* Quick Links Section */}
        <section className='py-12 bg-white border-b'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid md:grid-cols-3 gap-6'>
              <Link href='/homes' className='block'>
                <Button
                  variant='outline'
                  className='w-full h-auto py-6 flex-col gap-2 hover:bg-[#F7F9FC]'
                >
                  <HomeIcon className='h-8 w-8 text-[#3A8DDE]' />
                  <span className='text-lg font-semibold'>Browse Homes</span>
                  <span className='text-sm text-gray-600'>
                    View all available properties
                  </span>
                </Button>
              </Link>
              <Link href='/neighborhood' className='block'>
                <Button
                  variant='outline'
                  className='w-full h-auto py-6 flex-col gap-2 hover:bg-[#F7F9FC]'
                >
                  <MapPin className='h-8 w-8 text-[#16B286]' />
                  <span className='text-lg font-semibold'>
                    Explore Craig Ranch
                  </span>
                  <span className='text-sm text-gray-600'>
                    Learn about the neighborhood
                  </span>
                </Button>
              </Link>
              <Link href='/market-data' className='block'>
                <Button
                  variant='outline'
                  className='w-full h-auto py-6 flex-col gap-2 hover:bg-[#F7F9FC]'
                >
                  <TrendingUp className='h-8 w-8 text-[#0A2540]' />
                  <span className='text-lg font-semibold'>Market Insights</span>
                  <span className='text-sm text-gray-600'>
                    Latest trends and statistics
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* RealScout Office Widget Section - Moved up for better conversion */}
        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
                Featured Listings from Dr. Jan Duffy
              </h2>
              <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                Browse our current office listings. Dr. Jan Duffy specializes in
                luxury homes and estates across Las Vegas and Henderson.
              </p>
            </div>
            <div className='bg-[#F7F9FC] rounded-xl p-8 shadow-lg border border-gray-200'>
              <Suspense
                fallback={
                  <div className='min-h-[400px] flex items-center justify-center'>
                    <div className='text-center'>
                      <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#3A8DDE] mx-auto mb-4'></div>
                      <p className='text-gray-500 text-sm'>
                        Loading office listings...
                      </p>
                    </div>
                  </div>
                }
              >
                <RealScoutOfficeWidget
                  agentEncodedId='QWdlbnQtMjI1MDUw'
                  showMap={true}
                  listingsPerPage='12'
                />
              </Suspense>
            </div>
          </div>
        </section>

        {/* Market Data Preview - Moved up to show market strength early */}
        <section className='py-16 bg-gradient-to-r from-[#0A2540] to-[#3A8DDE]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl font-bold text-white mb-4'>
              Craig Ranch Market Overview
            </h2>
            <p className='text-xl text-gray-200 mb-8 max-w-3xl mx-auto'>
              Stay informed with the latest real estate trends in Las
              Vegas&apos; most prestigious community
            </p>
            <div className='grid md:grid-cols-4 gap-6 mb-8'>
              <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
                <div className='text-3xl font-bold text-white mb-1'>$875K</div>
                <div className='text-gray-300 text-sm'>Avg Home Price</div>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
                <div className='text-3xl font-bold text-white mb-1'>23</div>
                <div className='text-gray-300 text-sm'>Days on Market</div>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
                <div className='text-3xl font-bold text-white mb-1'>156</div>
                <div className='text-gray-300 text-sm'>Active Listings</div>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
                <div className='text-3xl font-bold text-white mb-1'>+5.2%</div>
                <div className='text-gray-300 text-sm'>Price Growth</div>
              </div>
            </div>
            <Button
              asChild
              className='bg-[#16B286] hover:bg-[#15A276] text-white'
            >
              <Link href='/market-data'>
                View Full Market Report <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
          </div>
        </section>

        <PropertyCategories />
        <FeaturedCommunities />
        <DynamicHomeEvaluation />

        <DynamicBlogPosts />
      </article>
    </PageLayout>
  );
}
