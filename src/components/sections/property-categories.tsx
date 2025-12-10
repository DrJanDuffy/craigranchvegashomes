'use client';

import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function PropertyCategories() {
  const categories = [
    {
      title: 'Single Family Homes',
      description: 'Spacious family homes with modern amenities',
      price: '$500K - $1.2M',
      image: '/images/single-family.jpg',
      count: '24 Available',
      features: ['3-5 Bedrooms', '2-4 Bathrooms', 'Garage'],
    },
    {
      title: 'Luxury Estates',
      description: 'Premium properties with exceptional finishes',
      price: '$1.5M - $3M+',
      image: '/images/luxury-estates.jpg',
      count: '8 Available',
      features: ['5+ Bedrooms', 'Premium Finishes', 'Large Lots'],
    },
    {
      title: 'New Construction',
      description: 'Brand new homes with latest features',
      price: '$600K - $1.8M',
      image: '/images/new-construction.jpg',
      count: '12 Available',
      features: ['Energy Efficient', 'Smart Home', 'Warranty'],
    },
  ];

  return (
    <section className='py-20 bg-[#F7F9FC]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-[#0A2540] mb-4'>
            Property Categories
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Explore our diverse selection of premium properties in Craig Ranch
          </p>
        </div>

        {/* Property Categories Grid */}
        <div className='grid md:grid-cols-3 gap-8'>
          {categories.map((category, index) => (
            <Card
              key={index}
              className='overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg'
            >
              {/* Placeholder for image */}
              <div className='h-48 bg-gradient-to-br from-[#0A2540] to-[#3A8DDE] flex items-center justify-center'>
                <div className='text-white text-center'>
                  <div className='text-4xl mb-2'>🏠</div>
                  <div className='text-sm opacity-80'>Property Image</div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className='text-2xl text-[#0A2540]'>
                  {category.title}
                </CardTitle>
                <CardDescription className='text-base'>
                  {category.description}
                </CardDescription>
              </CardHeader>

              <CardContent className='space-y-4'>
                <div className='flex flex-wrap gap-2'>
                  {category.features.map((feature, featureIndex) => (
                    <Badge
                      key={featureIndex}
                      variant='outline'
                      className='text-[#0A2540] border-[#0A2540]/20'
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
                <div className='flex justify-between items-center pt-2'>
                  <span className='text-[#16B286] font-semibold text-lg'>
                    {category.price}
                  </span>
                  <Badge variant='secondary' className='text-sm'>
                    {category.count}
                  </Badge>
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  className='w-full bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white'
                >
                  <Link href='http://drjanduffy.realscout.com/onboarding'>
                    View Properties
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
