import type { Metadata } from 'next';
import Script from 'next/script';
import { Source_Sans_3, Open_Sans } from 'next/font/google';
import './globals.css';

// Optimize fonts with next/font
const sourceSansPro = Source_Sans_3({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-sans-pro',
});

const openSans = Open_Sans({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: 'Craig Ranch Vegas Homes | Luxury Real Estate in Las Vegas, NV',
  description:
    "Discover luxury homes in Craig Ranch, Las Vegas. Find your dream home in one of the city's most prestigious communities with premium amenities, excellent schools, and convenient location. View current listings from $600K to $1.2M.",
  keywords:
    'Craig Ranch, Las Vegas homes, luxury real estate, Nevada homes, Las Vegas real estate, Craig Ranch community, luxury homes Las Vegas, Craig Ranch properties, Las Vegas luxury real estate, Craig Ranch homes for sale, Las Vegas real estate agent, Craig Ranch neighborhood, luxury properties Las Vegas, Craig Ranch real estate market, Las Vegas home values',
  authors: [
    { name: 'Craig Ranch Vegas Homes', url: 'https://www.craigranchhomes.com' },
  ],
  creator: 'Craig Ranch Vegas Homes',
  publisher: 'Craig Ranch Vegas Homes',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.craigranchhomes.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Craig Ranch Vegas Homes | Luxury Real Estate in Las Vegas, NV',
    description:
      "Discover luxury homes in Craig Ranch, Las Vegas. Find your dream home in one of the city's most prestigious communities with premium amenities and excellent location.",
    url: 'https://www.craigranchhomes.com',
    siteName: 'Craig Ranch Vegas Homes',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Craig Ranch Vegas Homes - Luxury Real Estate in Las Vegas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Craig Ranch Vegas Homes | Luxury Real Estate in Las Vegas, NV',
    description:
      "Discover luxury homes in Craig Ranch, Las Vegas. Find your dream home in one of the city's most prestigious communities.",
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Real Estate',
  classification: 'Luxury Real Estate',
  other: {
    'geo.region': 'US-NV',
    'geo.placename': 'Las Vegas',
    'geo.position': '36.1699;-115.1398',
    ICBM: '36.1699, -115.1398',
    'DC.title': 'Craig Ranch Vegas Homes',
    'DC.creator': 'Craig Ranch Vegas Homes',
    'DC.subject': 'Luxury Real Estate, Las Vegas, Craig Ranch',
    'DC.description': 'Luxury homes in Craig Ranch, Las Vegas',
    'DC.publisher': 'Craig Ranch Vegas Homes',
    'DC.contributor': 'Craig Ranch Vegas Homes',
    'DC.date': '2024',
    'DC.type': 'Text',
    'DC.format': 'text/html',
    'DC.identifier': 'https://www.craigranchhomes.com',
    'DC.language': 'en',
    'DC.coverage': 'Las Vegas, Nevada',
    'DC.rights': 'Copyright 2024 Craig Ranch Vegas Homes',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${sourceSansPro.variable} ${openSans.variable}`}>
      <head>
        <style>{`
          realscout-office-listings {
            --rs-listing-divider-color: rgb(101, 141, 172);
            width: 100%;
          }
        `}</style>

        {/* Google Analytics */}
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id='google-tag-manager' strategy='afterInteractive'>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id='facebook-pixel' strategy='afterInteractive'>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_FACEBOOK_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Structured Data for Real Estate Business */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              name: 'Dr. Jan Duffy',
              description:
                'REALTOR® with Berkshire Hathaway HomeServices® Nevada, specializing in luxury homes and estates in Las Vegas and Henderson',
              jobTitle: 'REALTOR®',
              worksFor: {
                '@type': 'Organization',
                name: 'Berkshire Hathaway HomeServices Nevada',
              },
              url: 'https://www.craigranchhomes.com',
              logo: 'https://craigranchvegas.com/logo.png',
              image: 'https://craigranchvegas.com/og-image.jpg',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Las Vegas',
                addressRegion: 'NV',
                addressCountry: 'US',
              },
              areaServed: {
                '@type': 'City',
                name: 'Las Vegas',
                addressRegion: 'NV',
                addressCountry: 'US',
              },
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
                telephone: '+1-702-500-1955',
                contactType: 'customer service',
                areaServed: 'US',
                availableLanguage: 'English',
              },
              memberOf: {
                '@type': 'Organization',
                name: 'Berkshire Hathaway HomeServices Nevada',
              },
              sameAs: [
                'https://www.facebook.com/craigranchvegas',
                'https://www.instagram.com/craigranchvegas',
                'https://www.linkedin.com/company/craigranchvegas',
              ],
            }),
          }}
        />

        {/* Structured Data for Local Business */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Craig Ranch Vegas Homes',
              description:
                'Luxury real estate services in Craig Ranch, Las Vegas',
              url: 'https://www.craigranchhomes.com',
              telephone: '+1-702-500-1955',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Craig Ranch',
                addressLocality: 'Las Vegas',
                addressRegion: 'NV',
                postalCode: '89129',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 36.1699,
                longitude: -115.1398,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday',
                ],
                opens: '09:00',
                closes: '18:00',
              },
              priceRange: '$$$',
              currenciesAccepted: 'USD',
            }),
          }}
        />

        {/* Structured Data for Website */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Craig Ranch Vegas Homes',
              url: 'https://www.craigranchhomes.com',
              description:
                'Luxury real estate services in Craig Ranch, Las Vegas, Nevada',
              potentialAction: {
                '@type': 'SearchAction',
                target:
                  'https://craigranchvegas.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className='antialiased'>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* RealScout Web Components Script - Load with high priority for better performance */}
        <Script
          id='realscout-script'
          src='https://em.realscout.com/widgets/realscout-web-components.umd.js'
          type='module'
          strategy='afterInteractive'
        />
        {children}
      </body>
    </html>
  );
}
