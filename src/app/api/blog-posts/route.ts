/**
 * API Route for Blog Posts
 * Fetches and parses RSS feed from Simplifying the Market
 */

import { NextResponse } from 'next/server';
import { parseRSSFeed } from '@/lib/utils/rss-parser';

const RSS_FEED_URL =
  'https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18';

// Revalidate every hour
export const revalidate = 3600;

export async function GET() {
  try {
    // Fetch RSS feed
    const response = await fetch(RSS_FEED_URL, {
      next: { revalidate: 3600 },
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; RSS Reader)',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.statusText}`);
    }

    const xmlString = await response.text();

    // Parse RSS feed
    const feed = parseRSSFeed(xmlString);

    // Return first 4 items (or limit as needed)
    const blogPosts = feed.items.slice(0, 4).map((item) => {
      // Generate category link
      const categorySlug = item.categories[0]?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') || 'market-insights';
      const categoryLink = `https://www.simplifyingthemarket.com/en/category/${categorySlug}/?a=956758-ef2edda2f940e018328655620ea05f18`;
      
      return {
        title: item.title,
        postLink: item.link,
        description: item.description,
        category: item.categories[0] || 'Market Insights',
        categoryLink,
        author: item.creator,
        date: formatDate(item.pubDate),
        imageUrl: item.imageUrl || '/placeholder-blog.jpg',
      };
    });

    return NextResponse.json({ blogPosts }, { status: 200 });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    
    // Return fallback data on error
    return NextResponse.json(
      {
        blogPosts: [
          {
            title: 'Latest Market Insights',
            postLink: 'https://www.simplifyingthemarket.com/?a=956758-ef2edda2f940e018328655620ea05f18',
            description: 'Stay informed with the latest real estate market insights',
            category: 'Market Insights',
            categoryLink: 'https://www.simplifyingthemarket.com/?a=956758-ef2edda2f940e018328655620ea05f18',
            author: 'Simplifying the Market',
            date: new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }),
            imageUrl: '/placeholder-blog.jpg',
          },
        ],
      },
      { status: 200 }
    );
  }
}

/**
 * Format date from RSS pubDate
 */
function formatDate(pubDate: string): string {
  try {
    const date = new Date(pubDate);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return pubDate;
  }
}

