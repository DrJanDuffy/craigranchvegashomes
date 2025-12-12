import type { Metadata } from 'next';
import Script from 'next/script';
import { Source_Sans_3, Open_Sans } from 'next/font/google';
import './globals.css';

const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ??
  process.env.GOOGLE_SITE_VERIFICATION;

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.craigranchhomes.com'
).replace(/\/$/, '');

const ogImageUrl = `${siteUrl}/og-image.jpg`;
const logoUrl = `${siteUrl}/logo.png`;

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
  title: 'Craig Ranch Vegas | Homes By Dr. Jan Duffy',
  description:
    "Discover luxury homes in Craig Ranch, Las Vegas. Find your dream home in one of the city's most prestigious communities with premium amenities, excellent schools, and convenient location. View current listings from $600K to $1.2M.",
  keywords:
    'Craig Ranch, Las Vegas homes, luxury real estate, Nevada homes, Las Vegas real estate, Craig Ranch community, luxury homes Las Vegas, Craig Ranch properties, Las Vegas luxury real estate, Craig Ranch homes for sale, Las Vegas real estate agent, Craig Ranch neighborhood, luxury properties Las Vegas, Craig Ranch real estate market, Las Vegas home values',
  authors: [
    { name: 'Craig Ranch Vegas | Homes By Dr. Jan Duffy', url: siteUrl },
  ],
  creator: 'Craig Ranch Vegas | Homes By Dr. Jan Duffy',
  publisher: 'Craig Ranch Vegas | Homes By Dr. Jan Duffy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Craig Ranch Vegas | Homes By Dr. Jan Duffy',
    description:
      "Discover luxury homes in Craig Ranch, Las Vegas. Find your dream home in one of the city's most prestigious communities with premium amenities and excellent location.",
    url: siteUrl,
    siteName: 'Craig Ranch Vegas | Homes By Dr. Jan Duffy',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Craig Ranch Vegas | Homes By Dr. Jan Duffy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Craig Ranch Vegas | Homes By Dr. Jan Duffy',
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
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
  category: 'Real Estate',
  classification: 'Luxury Real Estate',
  other: {
    'geo.region': 'US-NV',
    'geo.placename': 'North Las Vegas, Las Vegas',
    'geo.position': '36.2465;-115.1475',
    ICBM: '36.2465, -115.1475',
    'DC.title': 'Craig Ranch Vegas | Homes By Dr. Jan Duffy',
    'DC.creator': 'Craig Ranch Vegas | Homes By Dr. Jan Duffy',
    'DC.subject': 'Luxury Real Estate, Las Vegas, Craig Ranch',
    'DC.description': 'Luxury homes in Craig Ranch, Las Vegas',
    'DC.publisher': 'Craig Ranch Vegas | Homes By Dr. Jan Duffy',
    'DC.contributor': 'Craig Ranch Vegas | Homes By Dr. Jan Duffy',
    'DC.date': '2024',
    'DC.type': 'Text',
    'DC.format': 'text/html',
    'DC.identifier': siteUrl,
    'DC.language': 'en',
    'DC.coverage': 'Las Vegas, Nevada',
    'DC.rights': 'Copyright 2024 Craig Ranch Vegas | Homes By Dr. Jan Duffy',
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
              logo: logoUrl,
              image: ogImageUrl,
              address: {
                '@type': 'PostalAddress',
                streetAddress: '851 W Lone Mountain Rd',
                addressLocality: 'North Las Vegas',
                addressRegion: 'NV',
                postalCode: '89032',
                addressCountry: 'US',
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
                'https://www.facebook.com/DrJanDuffyRealtorCentennialHills',
                'https://www.instagram.com/drjanduffy',
                'https://www.youtube.com/@DrDuffy',
                'https://twitter.com/drjanduffy',
                'https://www.linkedin.com/in/lvrmembers',
                'https://www.tiktok.com/@dr.janduffy',
                'https://www.pinterest.com/bhhsluxury',
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
              '@id': `${siteUrl}#localbusiness`,
              name: 'Craig Ranch Vegas | Homes By Dr. Jan Duffy',
              description:
                'Luxury real estate services in Craig Ranch, North Las Vegas, Las Vegas, Nevada. Expert real estate agent specializing in Craig Ranch homes and properties.',
              url: siteUrl,
              telephone: '+1-702-500-1955',
              email: 'DrDuffy@CraigRanchHomes.com',
              image: ogImageUrl,
              logo: logoUrl,
              address: {
                '@type': 'PostalAddress',
                streetAddress: '851 W Lone Mountain Rd',
                addressLocality: 'North Las Vegas',
                addressRegion: 'NV',
                postalCode: '89032',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 36.2465,
                longitude: -115.1475,
              },
              hasMap:
                'https://www.google.com/maps/search/?api=1&query=851+W+Lone+Mountain+Rd+North+Las+Vegas+NV+89032',
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                  ],
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
              name: 'Craig Ranch Vegas | Homes By Dr. Jan Duffy',
              url: siteUrl,
              description:
                'Luxury real estate services in Craig Ranch, North Las Vegas, Las Vegas, Nevada. Find your dream home with Dr. Jan Duffy, REALTOR® specializing in Craig Ranch properties.',
              potentialAction: {
                '@type': 'SearchAction',
                target:
                  `${siteUrl}/search?q={search_term_string}`,
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
