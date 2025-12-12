import type { Metadata } from 'next';

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.craigranchhomes.com'
).replace(/\/$/, '');

const businessAddress = {
  streetAddress: '851 W Lone Mountain Rd',
  addressLocality: 'North Las Vegas',
  addressRegion: 'NV',
  postalCode: '89032',
  addressCountry: 'US',
} as const;

// Approximate coordinates for the office location.
// If you need exact GPS from GBP, replace these values.
const businessGeo = {
  latitude: 36.2465,
  longitude: -115.1475,
} as const;

const businessName = 'Craig Ranch Vegas | Homes By Dr. Jan Duffy';
const businessPhone = '+1-702-500-1955';
const businessEmail = 'DrDuffy@CraigRanchHomes.com';

export const CRAIG_RANCH_FAQS = [
  {
    question: 'What makes Craig Ranch a desirable community?',
    answer:
      "Craig Ranch is a master-planned community in North Las Vegas, winner of 'Best Planned Community' in 2020. It offers family-friendly homes, excellent schools, 170-acre Craig Ranch Regional Park, 5 miles of trails, and convenient access to shopping, dining, and major highways. The tight-knit community is united around the park, which hosts over 40 events per year.",
  },
  {
    question: 'What is the average price range for homes in Craig Ranch?',
    answer:
      'Home prices in Craig Ranch range from $370,000 to $1.8 million, depending on the property type, size, and location. The average home value is $427,967, with an average price per square foot of $242. The median sale price is $415,000.',
  },
  {
    question: 'How long do properties typically stay on the market?',
    answer:
      "Properties in Craig Ranch sell after an average of 46 days on market, which is faster than the national average of 53 days. The area's strong demand, excellent schools, and desirable location contribute to steady sales.",
  },
  {
    question: 'What types of properties are available?',
    answer:
      'We offer a diverse selection including single-family homes, luxury estates, and new construction properties. Each category features different amenities and price points to suit various buyer needs and preferences.',
  },
  {
    question: 'Do you help with financing and mortgage options?',
    answer:
      'Yes, we work with trusted mortgage partners to help you find the best financing options. We can connect you with lenders who specialize in luxury home financing and offer competitive rates.',
  },
  {
    question: 'Can I schedule a property tour?',
    answer:
      'Absolutely! You can schedule a tour through our website or by contacting us directly. We offer both in-person and virtual tours to accommodate your preferences and schedule.',
  },
] as const;

const siteConfig = {
  name: businessName,
  url: siteUrl,
  description:
    'Luxury real estate services in Craig Ranch, North Las Vegas, Las Vegas, Nevada. Find your dream home with Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices® Nevada specializing in Craig Ranch properties.',
  ogImage: '/og-image.jpg',
  twitterHandle: '@craigranchvegas',
  locale: 'en_US',
  type: 'website',
};

/**
 * Generate comprehensive metadata for pages
 */
export function generateMetadata({
  title,
  description,
  keywords,
  path = '/',
  image,
  type = 'website',
}: {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || siteConfig.ogImage;
  const fullImageUrl = ogImage.startsWith('http')
    ? ogImage
    : `${siteConfig.url}${ogImage}`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImageUrl],
      creator: siteConfig.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'geo.region': 'US-NV',
      'geo.placename': 'North Las Vegas, Las Vegas',
      'geo.position': `${businessGeo.latitude};${businessGeo.longitude}`,
      ICBM: `${businessGeo.latitude}, ${businessGeo.longitude}`,
    },
  };
}

/**
 * Generate LocalBusiness schema for contact pages
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}#localbusiness`,
    name: businessName,
    description:
      'Luxury real estate services in Craig Ranch, North Las Vegas, Las Vegas, Nevada. Expert real estate agent specializing in Craig Ranch homes and properties.',
    url: siteUrl,
    telephone: businessPhone,
    email: businessEmail,
    image: `${siteUrl}/og-image.jpg`,
    logo: `${siteUrl}/logo.png`,
    address: {
      '@type': 'PostalAddress',
      ...businessAddress,
    },
    geo: {
      '@type': 'GeoCoordinates',
      ...businessGeo,
    },
    hasMap:
      'https://www.google.com/maps/search/?api=1&query=851+W+Lone+Mountain+Rd+North+Las+Vegas+NV+89032',
    areaServed: [
      { '@type': 'City', name: 'North Las Vegas', addressRegion: 'NV' },
      { '@type': 'City', name: 'Las Vegas', addressRegion: 'NV' },
      { '@type': 'City', name: 'Henderson', addressRegion: 'NV' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '10:00',
        closes: '16:00',
      },
      // Sunday: By appointment (omit hours rather than guessing)
    ],
    priceRange: '$$$',
    currenciesAccepted: 'USD',
  };
}

/**
 * Generate RealEstateAgent schema
 */
export function generateRealEstateAgentSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${siteUrl}#realestateagent`,
    name: 'Dr. Jan Duffy',
    description:
      'REALTOR® with Berkshire Hathaway HomeServices® Nevada, specializing in luxury homes and estates in Craig Ranch, Las Vegas, North Las Vegas, and Henderson',
    jobTitle: 'REALTOR®',
    worksFor: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada',
    },
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/og-image.jpg`,
    address: {
      '@type': 'PostalAddress',
      ...businessAddress,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'North Las Vegas',
        addressRegion: 'NV',
        addressCountry: 'US',
      },
      {
        '@type': 'City',
        name: 'Las Vegas',
        addressRegion: 'NV',
        addressCountry: 'US',
      },
      {
        '@type': 'City',
        name: 'Henderson',
        addressRegion: 'NV',
        addressCountry: 'US',
      },
    ],
    serviceArea: {
      '@type': 'Place',
      name: 'Craig Ranch',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        addressCountry: 'US',
      },
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: businessPhone,
      email: businessEmail,
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'English',
    },
    memberOf: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada',
    },
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate CollectionPage schema for listings pages
 */
export function generateCollectionPageSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url,
    mainEntity: {
      '@type': 'ItemList',
      name,
      description,
    },
  };
}

/**
 * Generate WebPage schema
 */
export function generateWebPageSchema({
  name,
  description,
  url,
  breadcrumb,
}: {
  name: string;
  description: string;
  url: string;
  breadcrumb?: Array<{ name: string; url: string }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    ...(breadcrumb && {
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumb.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      },
    }),
  };
}

export function generateFAQPageSchema(
  faqs: ReadonlyArray<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

