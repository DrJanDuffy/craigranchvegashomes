import PageLayout from '@/components/layout/page-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { School, UtensilsCrossed, ShoppingCart, TreePine, Heart, Users, Car, Building2 } from 'lucide-react';

export const metadata = {
  title: 'Craig Ranch Community Guide: Schools, Amenities & Lifestyle | Las Vegas',
  description: 'Discover schools, amenities, shopping, dining, and lifestyle in Craig Ranch, Las Vegas. Your complete guide to community living.',
};

export default function CommunityPage() {
  const schools = [
    {
      name: 'Craig Ranch Elementary',
      type: 'Public Elementary',
      rating: '9/10',
      distance: '0.5 miles',
    },
    {
      name: 'North Las Vegas High School',
      type: 'Public High School',
      rating: '8/10',
      distance: '2 miles',
    },
    {
      name: 'Legacy Traditional School',
      type: 'Charter School',
      rating: '9/10',
      distance: '1 mile',
    },
  ];

  const amenities = [
    { name: 'Community Parks', icon: TreePine, description: 'Multiple parks with playgrounds and walking trails' },
    { name: 'Shopping Centers', icon: ShoppingCart, description: 'Premium shopping within 5 minutes' },
    { name: 'Restaurants', icon: UtensilsCrossed, description: 'Diverse dining options nearby' },
    { name: 'Recreation Centers', icon: Heart, description: 'Fitness and community centers' },
    { name: 'Golf Courses', icon: TreePine, description: 'Championship golf courses nearby' },
    { name: 'Medical Facilities', icon: Building2, description: 'Top-rated hospitals and clinics' },
  ];

  const lifestyle = [
    {
      title: 'Family-Friendly',
      description: 'Safe, welcoming community perfect for families with children',
      icon: Users,
    },
    {
      title: 'Active Lifestyle',
      description: 'Parks, trails, and recreational facilities for an active lifestyle',
      icon: Heart,
    },
    {
      title: 'Convenient Location',
      description: 'Easy access to major highways, downtown, and the Las Vegas Strip',
      icon: Car,
    },
  ];

  return (
    <PageLayout>
      <div className="bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Craig Ranch Community Guide
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Discover the schools, amenities, and lifestyle that make Craig Ranch 
            one of Las Vegas&apos; most desirable communities.
          </p>
        </div>
      </div>

      {/* Schools Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-[#3A8DDE]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <School className="h-8 w-8 text-[#3A8DDE]" />
            </div>
            <h2 className="text-3xl font-bold text-[#0A2540] mb-4">
              Top-Rated Schools
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Craig Ranch is served by excellent public and private schools, 
              making it an ideal location for families with children.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {schools.map((school, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{school.name}</CardTitle>
                  <Badge variant="outline" className="w-fit">
                    {school.type}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rating:</span>
                      <span className="font-semibold text-[#16B286]">{school.rating}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Distance:</span>
                      <span className="font-semibold">{school.distance}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A2540] mb-4">
              Community Amenities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need is just minutes away in Craig Ranch
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#16B286]/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-[#16B286]" />
                    </div>
                    <CardTitle>{amenity.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{amenity.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A2540] mb-4">
              Lifestyle & Community
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the lifestyle that makes Craig Ranch special
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {lifestyle.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-[#0A2540]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-[#0A2540]" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join the Craig Ranch Community?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Discover why so many families choose to call Craig Ranch home. 
            Browse available properties or contact us for a personalized community tour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#16B286] hover:bg-[#15A276] text-white">
              <Link href="/homes">
                View Homes for Sale
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/contact">
                Schedule Community Tour
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

