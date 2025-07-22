'use client';

import Navigation from '@/components/sections/navigation';
import Hero from '@/components/sections/hero';
import HomeEvaluationSection from '@/components/sections/home-evaluation';
import RealEstateListings from '@/components/sections/real-estate-listings';
import NorthLasVegasNeighborhoods from '@/components/sections/north-las-vegas-neighborhoods';
import PropertyCategories from '@/components/sections/property-categories';
import FeaturedCommunities from '@/components/sections/featured-communities';
import MarketDataSection from '@/components/sections/market-data';
import BlogPosts from '@/components/sections/blog-posts';
import AboutContent from '@/components/sections/about-content';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-grow">
        <article>
          <Hero />
          <HomeEvaluationSection />
          <RealEstateListings />
          <NorthLasVegasNeighborhoods />
          <PropertyCategories />
          <FeaturedCommunities />
          <MarketDataSection />
          <BlogPosts />
          <AboutContent />
        </article>
      </main>
      <Footer />
    </div>
  );
}
