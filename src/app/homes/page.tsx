import PageLayout from '@/components/layout/page-layout';
import RealEstateListings from '@/components/sections/real-estate-listings';
import PropertyCategories from '@/components/sections/property-categories';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Home, MapPin, DollarSign, TrendingUp } from 'lucide-react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Homes for Sale in Craig Ranch, Las Vegas | Craig Ranch Vegas Homes',
  description:
    "Browse luxury homes for sale in Craig Ranch, Las Vegas. Find your dream home in one of Las Vegas' most prestigious communities.",
};

export default function HomesPage() {
  return (
    <PageLayout>
      <div className='bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Homes for Sale in Craig Ranch
          </h1>
          <p className='text-xl text-gray-200 max-w-3xl'>
            Discover luxury homes in one of Las Vegas&apos; most prestigious
            communities. From single-family homes to luxury estates, find your
            perfect property in Craig Ranch.
          </p>
        </div>
      </div>

      <RealEstateListings />

      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-8 text-center'>
            Why Buy in Craig Ranch?
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <div className='w-12 h-12 bg-[#3A8DDE]/10 rounded-lg flex items-center justify-center mb-4'>
                  <Home className='h-6 w-6 text-[#3A8DDE]' />
                </div>
                <CardTitle>Premium Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Luxury homes with modern amenities, high-end finishes, and
                  exceptional craftsmanship
                </CardDescription>
              </CardContent>
            </Card>

            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <div className='w-12 h-12 bg-[#16B286]/10 rounded-lg flex items-center justify-center mb-4'>
                  <MapPin className='h-6 w-6 text-[#16B286]' />
                </div>
                <CardTitle>Prime Location</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Convenient access to shopping, dining, entertainment, and
                  excellent schools
                </CardDescription>
              </CardContent>
            </Card>

            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <div className='w-12 h-12 bg-[#0A2540]/10 rounded-lg flex items-center justify-center mb-4'>
                  <TrendingUp className='h-6 w-6 text-[#0A2540]' />
                </div>
                <CardTitle>Strong Market</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Properties sell quickly with strong appreciation and growing
                  demand
                </CardDescription>
              </CardContent>
            </Card>

            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <div className='w-12 h-12 bg-[#3A8DDE]/10 rounded-lg flex items-center justify-center mb-4'>
                  <DollarSign className='h-6 w-6 text-[#3A8DDE]' />
                </div>
                <CardTitle>Great Value</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Competitive pricing with excellent value for luxury living in
                  Las Vegas
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <PropertyCategories />

      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
            Ready to Find Your Dream Home?
          </h2>
          <p className='text-lg text-gray-600 mb-8'>
            Our expert team is here to help you find the perfect property in
            Craig Ranch. Schedule a consultation or browse our current listings.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              asChild
              size='lg'
              className='bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white'
            >
              <Link
                href='http://drjanduffy.realscout.com/onboarding'
                target='_blank'
                rel='noopener noreferrer'
                prefetch={false}
              >
                View All Listings
              </Link>
            </Button>
            <Button asChild size='lg' variant='outline'>
              <Link href='/contact'>Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
