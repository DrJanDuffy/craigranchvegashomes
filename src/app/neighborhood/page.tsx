import PageLayout from '@/components/layout/page-layout';
import FeaturedCommunities from '@/components/sections/featured-communities';
import NorthLasVegasNeighborhoods from '@/components/sections/north-las-vegas-neighborhoods';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { School, ShoppingBag, TreePine, Car, Heart, Users } from 'lucide-react';

export const metadata = {
  title: 'About Craig Ranch Neighborhood, Las Vegas | Community Guide',
  description: 'Learn about Craig Ranch, one of Las Vegas\' most prestigious communities. Discover schools, amenities, location, and what makes this neighborhood special.',
};

export default function NeighborhoodPage() {
  const highlights = [
    {
      icon: School,
      title: 'Top-Rated Schools',
      description: 'Excellent public and private schools serving the Craig Ranch community',
      color: 'text-[#3A8DDE]',
      bgColor: 'bg-[#3A8DDE]/10',
    },
    {
      icon: ShoppingBag,
      title: 'Shopping & Dining',
      description: 'Convenient access to premium shopping centers and diverse dining options',
      color: 'text-[#16B286]',
      bgColor: 'bg-[#16B286]/10',
    },
    {
      icon: TreePine,
      title: 'Parks & Recreation',
      description: 'Beautiful parks, walking trails, and recreational facilities throughout the area',
      color: 'text-[#0A2540]',
      bgColor: 'bg-[#0A2540]/10',
    },
    {
      icon: Car,
      title: 'Easy Access',
      description: 'Close to major highways with easy access to downtown Las Vegas and the Strip',
      color: 'text-[#3A8DDE]',
      bgColor: 'bg-[#3A8DDE]/10',
    },
  ];

  const stats = [
    { label: 'Established', value: '2000s', icon: Heart },
    { label: 'Population', value: '15,000+', icon: Users },
    { label: 'Home Types', value: 'SFR, Estates', icon: TreePine },
    { label: 'Price Range', value: '$500K - $3M+', icon: ShoppingBag },
  ];

  return (
    <PageLayout>
      <div className="bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Craig Ranch
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            One of Las Vegas&apos; most prestigious communities, offering luxury living 
            with modern amenities, excellent schools, and a family-friendly atmosphere.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#0A2540] mb-6">
                About Craig Ranch
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Craig Ranch is a master-planned community located in North Las Vegas, 
                  Nevada, known for its luxury homes, excellent schools, and family-friendly 
                  atmosphere. Established in the early 2000s, the community has grown into 
                  one of the most desirable neighborhoods in the Las Vegas Valley.
                </p>
                <p>
                  The area features a mix of single-family homes, luxury estates, and new 
                  construction properties, all designed with modern amenities and high-end 
                  finishes. Residents enjoy access to parks, recreational facilities, 
                  shopping centers, and top-rated schools.
                </p>
                <p>
                  With its convenient location, excellent infrastructure, and strong sense 
                  of community, Craig Ranch continues to attract families and professionals 
                  looking for premium living in Las Vegas.
                </p>
              </div>
            </div>
            <div className="bg-[#F7F9FC] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#0A2540] mb-6">Community Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-[#3A8DDE]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <Icon className="h-6 w-6 text-[#3A8DDE]" />
                      </div>
                      <div className="text-2xl font-bold text-[#0A2540] mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#0A2540] mb-8 text-center">
            What Makes Craig Ranch Special
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className={`w-12 h-12 ${highlight.bgColor} rounded-lg flex items-center justify-center mb-4`}>
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

      <FeaturedCommunities />
      <NorthLasVegasNeighborhoods />

      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0A2540] mb-4">
            Ready to Call Craig Ranch Home?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Discover why so many families choose Craig Ranch. Browse available properties 
            or contact us to learn more about this exceptional community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white">
              <Link href="/homes">
                View Available Homes
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">
                Get Neighborhood Guide
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

