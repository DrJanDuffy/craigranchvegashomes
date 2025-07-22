import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Craig Ranch Vegas Homes | Luxury Real Estate in Las Vegas",
  description: "Discover luxury homes in Craig Ranch, Las Vegas. Find your dream home in one of the city's most prestigious communities with premium amenities and excellent location.",
  keywords: "Craig Ranch, Las Vegas homes, luxury real estate, Nevada homes, Las Vegas real estate, Craig Ranch community",
  authors: [{ name: "Craig Ranch Vegas Homes" }],
  creator: "Craig Ranch Vegas Homes",
  publisher: "Craig Ranch Vegas Homes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://craigranchvegas.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Craig Ranch Vegas Homes | Luxury Real Estate in Las Vegas",
    description: "Discover luxury homes in Craig Ranch, Las Vegas. Find your dream home in one of the city's most prestigious communities.",
    url: 'https://craigranchvegas.com',
    siteName: 'Craig Ranch Vegas Homes',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Craig Ranch Vegas Homes | Luxury Real Estate in Las Vegas",
    description: "Discover luxury homes in Craig Ranch, Las Vegas. Find your dream home in one of the city's most prestigious communities.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
