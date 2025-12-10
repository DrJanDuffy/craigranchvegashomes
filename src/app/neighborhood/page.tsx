import PageLayout from '@/components/layout/page-layout';
import FeaturedCommunities from '@/components/sections/featured-communities';
import NorthLasVegasNeighborhoods from '@/components/sections/north-las-vegas-neighborhoods';
import CraigRanchListings from '@/components/sections/craig-ranch-listings';
import CraigRanchPropertySearch from '@/components/sections/craig-ranch-property-search';
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
import {
  School,
  ShoppingBag,
  TreePine,
  Car,
  Heart,
  Users,
  Home,
  DollarSign,
  TrendingUp,
  MapPin,
  Search,
} from 'lucide-react';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Craig Ranch Homes & Real Estate | North Las Vegas Community Guide',
  description:
    'Craig Ranch homes for sale in North Las Vegas features 13 floor plans by Century Communities. Sizes from 1,519 to 2,638-square feet, up to 5 bedrooms, 3 bathrooms and 2 bay garages. With close proximity to schools, parks and activity centers, Craig Ranch is the perfect family neighborhood.',
  keywords:
    'Craig Ranch, North Las Vegas homes, Century Communities, Craig Ranch Regional Park, 89031 zip code, North Las Vegas real estate, family neighborhood, gated community',
};

export default function NeighborhoodPage() {
  const highlights = [
    {
      icon: School,
      title: 'Top-Rated Schools',
      description:
        'Excellent public and private schools serving the Craig Ranch community',
      color: 'text-[#3A8DDE]',
      bgColor: 'bg-[#3A8DDE]/10',
    },
    {
      icon: ShoppingBag,
      title: 'Shopping & Dining',
      description:
        'Convenient access to premium shopping centers and diverse dining options',
      color: 'text-[#16B286]',
      bgColor: 'bg-[#16B286]/10',
    },
    {
      icon: TreePine,
      title: 'Parks & Trails',
      description:
        '7 community parks, a 3.5-acre park, and miles of trails near Craig Ranch Regional Park',
      color: 'text-[#0A2540]',
      bgColor: 'bg-[#0A2540]/10',
    },
    {
      icon: Car,
      title: 'Prime Location',
      description:
        'Near Nellis Air Force Base, VA Hospital, I-15, and the 215 Beltway for easy access throughout the valley',
      color: 'text-[#3A8DDE]',
      bgColor: 'bg-[#3A8DDE]/10',
    },
  ];

  const stats = [
    { label: 'Neighborhoods', value: '6', icon: Heart },
    { label: 'Floor Plans', value: '13', icon: Users },
    { label: 'Home Size', value: '1,519-2,638 sq.ft.', icon: Home },
    { label: 'Zip Code', value: '89031', icon: MapPin },
  ];

  const realEstateStats = [
    { label: 'Total Listings', value: '2', icon: Home },
    { label: 'Average Price', value: '$419,950', icon: DollarSign },
    { label: 'Highest Price', value: '$429,900', icon: TrendingUp },
    { label: 'Lowest Price', value: '$410,000', icon: DollarSign },
  ];

  return (
    <PageLayout>
      <div className='bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Welcome to Craig Ranch
          </h1>
          <p className='text-xl text-gray-200 max-w-3xl'>
            Craig Ranch homes for sale in North Las Vegas features 13 floor
            plans by Century Communities. Sizes from 1,519 to 2,638-square
            feet, up to 5 bedrooms, 3 bathrooms and 2 bay garages. With close
            proximity to schools, parks and activity centers, Craig Ranch is the
            perfect family neighborhood.
          </p>
        </div>
      </div>

      {/* Featured Listings Section */}
      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
              View All Homes for Sale in Craig Ranch
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Explore all available properties in Craig Ranch, North Las Vegas
            </p>
          </div>

          <div className='bg-white rounded-xl p-8 shadow-lg'>
            <CraigRanchListings
              priceMin='400000'
              priceMax='500000'
              showMap={false}
              listingsPerPage='6'
            />
            <div className='mt-6 text-center'>
              <Button
                asChild
                size='lg'
                className='bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white'
              >
                <Link href='#search-listings'>
                  Search All Craig Ranch Homes
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center mb-16'>
            <div>
              <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
                About Craig Ranch
              </h2>
              <div className='space-y-4 text-gray-600 leading-relaxed'>
                <p>
                  Craig Ranch is a well-designed master-planned community in
                  North Las Vegas, Nevada. Built to accommodate a growing
                  population, Craig Ranch is gated, and consists of 6 different
                  neighborhoods, where homes for sale are economically priced
                  and geared towards families.
                </p>
                <p>
                  Homes in Craig Ranch are close to several community parks,
                  including Craig Ranch Regional Park and interconnecting walking
                  trails. Situated in the 89031 zip code, Craig Ranch is close
                  to local schools, box stores, the VA Hospital, Nellis Air
                  Force Base, the 215 Beltway and I-15.
                </p>
                <p>
                  The community features 13 floor plans by Century Communities,
                  with home sizes ranging from 1,519 to 2,638 square feet, up to
                  5 bedrooms, 3 bathrooms, and 2 bay garages. With its prime
                  location, excellent amenities, and family-friendly atmosphere,
                  Craig Ranch offers the perfect blend of modern living and
                  community connection.
                </p>
              </div>
            </div>
            <div className='bg-[#F7F9FC] rounded-xl p-8'>
              <h3 className='text-2xl font-bold text-[#0A2540] mb-6'>
                Community Stats
              </h3>
              <div className='grid grid-cols-2 gap-6'>
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className='text-center'>
                      <div className='w-12 h-12 bg-[#3A8DDE]/10 rounded-lg flex items-center justify-center mx-auto mb-3'>
                        <Icon className='h-6 w-6 text-[#3A8DDE]' />
                      </div>
                      <div className='text-2xl font-bold text-[#0A2540] mb-1'>
                        {stat.value}
                      </div>
                      <div className='text-sm text-gray-600'>{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Real Estate Stats */}
          <div className='mb-16 bg-gradient-to-r from-[#F7F9FC] to-white rounded-xl p-8 border border-gray-200'>
            <h3 className='text-2xl font-bold text-[#0A2540] mb-6 text-center'>
              Craig Ranch Real Estate Stats
            </h3>
            <div className='grid md:grid-cols-4 gap-6'>
              {realEstateStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className='text-center'>
                    <div className='w-12 h-12 bg-[#3A8DDE]/10 rounded-lg flex items-center justify-center mx-auto mb-3'>
                      <Icon className='h-6 w-6 text-[#3A8DDE]' />
                    </div>
                    <div className='text-2xl font-bold text-[#0A2540] mb-1'>
                      {stat.value}
                    </div>
                    <div className='text-sm text-gray-600'>{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Home Specifications */}
          <div className='mb-16 bg-gradient-to-r from-[#F7F9FC] to-white rounded-xl p-8 border border-gray-200'>
            <h3 className='text-2xl font-bold text-[#0A2540] mb-6 text-center'>
              Home Specifications
            </h3>
            <div className='grid md:grid-cols-4 gap-6'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-[#3A8DDE] mb-2'>13</div>
                <div className='text-gray-600'>Floor Plans</div>
                <div className='text-xs text-gray-500 mt-1'>
                  by Century Communities
                </div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-[#16B286] mb-2'>
                  1,519-2,638
                </div>
                <div className='text-gray-600'>Square Feet</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-[#0A2540] mb-2'>5</div>
                <div className='text-gray-600'>Bedrooms Max</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-[#3A8DDE] mb-2'>3</div>
                <div className='text-gray-600'>Bathrooms Max</div>
              </div>
            </div>
            <div className='mt-6 text-center'>
              <p className='text-gray-600'>
                Single and two-story homes with 2 bay garages, designed for
                every family member
              </p>
            </div>
          </div>

          <h2 className='text-3xl font-bold text-[#0A2540] mb-8 text-center'>
            What Makes Craig Ranch Special
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className='border-0 shadow-lg'>
                  <CardHeader>
                    <div
                      className={`w-12 h-12 ${highlight.bgColor} rounded-lg flex items-center justify-center mb-4`}
                    >
                      <Icon className={`h-6 w-6 ${highlight.color}`} />
                    </div>
                    <CardTitle>{highlight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{highlight.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Craig Ranch Regional Park Section */}
      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <div className='w-16 h-16 bg-[#16B286]/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
              <TreePine className='h-8 w-8 text-[#16B286]' />
            </div>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
              Craig Ranch Regional Park
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              A true asset to the community, Craig Ranch Regional Park measures
              170 acres in size. Located at the site of the former Craig Ranch
              Golf Course, this park offers an abundance of features.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <CardTitle className='text-lg'>Amphitheater</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Seating for over 8,000 people for concerts and community
                  events
                </CardDescription>
              </CardContent>
            </Card>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <CardTitle className='text-lg'>Skate Park</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  65,000 square-foot skate park for all skill levels
                </CardDescription>
              </CardContent>
            </Card>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <CardTitle className='text-lg'>Sports Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Two lighted competition baseball fields, tennis, volleyball
                  and basketball courts
                </CardDescription>
              </CardContent>
            </Card>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <CardTitle className='text-lg'>Dog Parks</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Three dedicated dog parks for your furry family members
                </CardDescription>
              </CardContent>
            </Card>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <CardTitle className='text-lg'>Community Gardens</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Community gardens for residents to grow fresh produce
                </CardDescription>
              </CardContent>
            </Card>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <CardTitle className='text-lg'>Civic Plazas & Ramadas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Four civic plazas and eight reservable ramadas for gatherings
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <div className='w-16 h-16 bg-[#3A8DDE]/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
              <School className='h-8 w-8 text-[#3A8DDE]' />
            </div>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
              Craig Ranch Schools
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Craig Ranch public and private schools are located within the
              Clark County School District. Below are the nearby schools serving
              the Craig Ranch community:
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <div className='w-12 h-12 bg-[#3A8DDE]/10 rounded-lg flex items-center justify-center mb-4'>
                  <School className='h-6 w-6 text-[#3A8DDE]' />
                </div>
                <CardTitle>Elementary Schools</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <strong>Raul P. Elizondo Elementary School</strong>
                </CardDescription>
              </CardContent>
            </Card>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <div className='w-12 h-12 bg-[#16B286]/10 rounded-lg flex items-center justify-center mb-4'>
                  <School className='h-6 w-6 text-[#16B286]' />
                </div>
                <CardTitle>Middle Schools</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <strong>Theron L. Swainston Middle School</strong>
                </CardDescription>
              </CardContent>
            </Card>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <div className='w-12 h-12 bg-[#0A2540]/10 rounded-lg flex items-center justify-center mb-4'>
                  <School className='h-6 w-6 text-[#0A2540]' />
                </div>
                <CardTitle>High Schools</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <strong>Mojave High School</strong>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Search Craig Ranch Homes Section */}
      <section id='search-listings' className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <div className='w-16 h-16 bg-[#3A8DDE]/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
              <Search className='h-8 w-8 text-[#3A8DDE]' />
            </div>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
              Search Craig Ranch Homes for Sale
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Browse available properties in Craig Ranch, North Las Vegas. Use
              the filters below to find your perfect home.
            </p>
          </div>

          {/* Real Estate Stats Summary */}
          <div className='mb-8 bg-gradient-to-r from-[#F7F9FC] to-white rounded-xl p-6 border border-gray-200'>
            <div className='flex flex-wrap items-center justify-center gap-6'>
              <div className='text-center'>
                <div className='text-2xl font-bold text-[#0A2540]'>2</div>
                <div className='text-sm text-gray-600'>Total Listings</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold text-[#3A8DDE]'>$419,950</div>
                <div className='text-sm text-gray-600'>Average Price</div>
              </div>
              <div className='flex flex-wrap gap-2 justify-center'>
                <Badge variant='outline' className='text-sm'>
                  All Listings
                </Badge>
                <Badge variant='outline' className='text-sm'>
                  $400,000 - $500,000
                </Badge>
              </div>
            </div>
          </div>

          {/* RealScout Listings Widget - Craig Ranch Filtered */}
          <div className='bg-[#F7F9FC] rounded-xl p-8 shadow-lg mb-8'>
            <div className='mb-6'>
              <h3 className='text-2xl font-semibold text-[#0A2540] mb-2'>
                Current Craig Ranch Listings
              </h3>
              <p className='text-gray-600'>
                Properties in Craig Ranch, North Las Vegas (89031) - Price range:
                $400,000 - $500,000
              </p>
            </div>

            <CraigRanchListings
              priceMin='400000'
              priceMax='500000'
              showMap={true}
              listingsPerPage='12'
            />

            <div className='mt-6 text-center'>
              <p className='text-gray-400 text-xs mb-4'>
                If listings don't appear, please refresh the page or contact us
                directly.
              </p>
              <Button
                asChild
                variant='outline'
                className='bg-white hover:bg-gray-50'
              >
                <Link href='/homes'>View All North Las Vegas Listings</Link>
              </Button>
            </div>
          </div>

          {/* Advanced Property Search Widget */}
          <div className='bg-white rounded-xl p-8 shadow-lg border border-gray-200'>
            <div className='mb-6'>
              <h3 className='text-2xl font-semibold text-[#0A2540] mb-2'>
                Advanced Property Search
              </h3>
              <p className='text-gray-600'>
                Use our advanced search tool to find properties matching your
                specific criteria in Craig Ranch and surrounding areas.
              </p>
            </div>

            <CraigRanchPropertySearch />
          </div>
        </div>
      </section>

      <FeaturedCommunities />
      <NorthLasVegasNeighborhoods />

      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
            Ready to Call Craig Ranch Home?
          </h2>
          <p className='text-lg text-gray-600 mb-8'>
            Discover why so many families choose Craig Ranch. Browse available
            properties or contact us to learn more about this exceptional
            community.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              asChild
              size='lg'
              className='bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white'
            >
              <Link href='/homes'>View Available Homes</Link>
            </Button>
            <Button asChild size='lg' variant='outline'>
              <Link href='/neighborhoods'>Explore Neighborhoods</Link>
            </Button>
            <Button asChild size='lg' variant='outline'>
              <Link href='/contact'>Contact Dr. Jan Duffy</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Structured Data for Neighborhood/Community */}
      <Script
        id='craig-ranch-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ResidentialComplex',
            name: 'Craig Ranch',
            description:
              'A well-designed master-planned gated community in North Las Vegas, Nevada featuring 13 floor plans by Century Communities, ranging from 1,519 to 2,638 square feet.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'North Las Vegas',
              addressRegion: 'NV',
              postalCode: '89031',
              addressCountry: 'US',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 36.2831,
              longitude: -115.1331,
            },
            numberOfBedrooms: {
              '@type': 'QuantitativeValue',
              minValue: 3,
              maxValue: 5,
            },
            numberOfBathroomsTotal: {
              '@type': 'QuantitativeValue',
              minValue: 2,
              maxValue: 3,
            },
            floorSize: {
              '@type': 'QuantitativeValue',
              minValue: 1519,
              maxValue: 2638,
              unitCode: 'SQM',
            },
            amenityFeature: [
              {
                '@type': 'LocationFeatureSpecification',
                name: 'Gated Community',
                value: true,
              },
              {
                '@type': 'LocationFeatureSpecification',
                name: 'Craig Ranch Regional Park',
                value: true,
              },
              {
                '@type': 'LocationFeatureSpecification',
                name: 'Walking Trails',
                value: true,
              },
              {
                '@type': 'LocationFeatureSpecification',
                name: 'Community Parks',
                value: true,
              },
            ],
            nearbyAttraction: [
              {
                '@type': 'TouristAttraction',
                name: 'Craig Ranch Regional Park',
                description:
                  '170-acre park featuring amphitheater, skate park, sports fields, dog parks, and community gardens',
              },
            ],
          }),
        }}
      />
    </PageLayout>
  );
}
