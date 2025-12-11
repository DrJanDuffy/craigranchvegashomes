/**
 * RSS Feed Parser Utility
 * Parses RSS XML and extracts blog post data
 */

export interface RSSItem {
  title: string;
  link: string;
  description: string;
  content: string;
  categories: string[];
  pubDate: string;
  creator: string;
  imageUrl?: string;
}

export interface RSSFeed {
  title: string;
  link: string;
  description: string;
  items: RSSItem[];
}

/**
 * Extract image URL from HTML content
 */
function extractImageUrl(html: string): string | undefined {
  // Try to find img tag with src attribute
  const imgMatch = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (imgMatch && imgMatch[1]) {
    return imgMatch[1];
  }
  
  // Try to find img tag with width attribute (from RSS feed)
  const imgMatch2 = html.match(/<img[^>]+width[^>]+src=["']([^"']+)["']/i);
  if (imgMatch2 && imgMatch2[1]) {
    return imgMatch2[1];
  }
  
  return undefined;
}

/**
 * Clean HTML description to plain text
 */
function cleanDescription(html: string): string {
  // Remove HTML tags
  let text = html.replace(/<[^>]*>/g, '');
  // Decode HTML entities
  text = text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
  // Trim and limit length
  return text.trim().substring(0, 200);
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

/**
 * Parse RSS XML string (server-side compatible)
 * Uses regex-based parsing for Node.js compatibility
 */
export function parseRSSFeed(xmlString: string): RSSFeed {
  // Extract channel info
  // Use [\s\S] instead of . with s flag for ES2017 compatibility
  const channelMatch = xmlString.match(/<channel>([\s\S]*?)<\/channel>/);
  if (!channelMatch) {
    throw new Error('RSS feed missing channel element');
  }
  
  const channelContent = channelMatch[1];
  
  const title = extractTagContent(channelContent, 'title') || '';
  const link = extractTagContent(channelContent, 'link') || '';
  const description = extractTagContent(channelContent, 'description') || '';
  
  // Extract all items
  const items: RSSItem[] = [];
  // Use [\s\S] instead of . with s flag for ES2017 compatibility
  const itemMatches = channelContent.matchAll(/<item>([\s\S]*?)<\/item>/g);
  
  for (const itemMatch of itemMatches) {
    const itemContent = itemMatch[1];
    
    const itemTitle = extractTagContent(itemContent, 'title') || '';
    const itemLink = extractTagContent(itemContent, 'link') || '';
    const itemDescription = extractTagContent(itemContent, 'description') || '';
    const itemContentEncoded = extractTagContent(itemContent, 'content:encoded') || extractTagContent(itemContent, 'content\\:encoded') || itemDescription;
    const itemPubDate = extractTagContent(itemContent, 'pubDate') || '';
    const itemCreator = extractTagContent(itemContent, 'dc:creator') || extractTagContent(itemContent, 'dc\\:creator') || 'Simplifying the Market';
    
    // Extract categories
    const categories: string[] = [];
    const categoryMatches = itemContent.matchAll(/<category>(.*?)<\/category>/g);
    for (const catMatch of categoryMatches) {
      const categoryText = catMatch[1].trim();
      if (categoryText) {
        categories.push(categoryText);
      }
    }
    
    // Extract image from content
    const imageUrl = extractImageUrl(itemContentEncoded) || extractImageUrl(itemDescription);
    
    items.push({
      title: itemTitle,
      link: itemLink,
      description: cleanDescription(itemDescription),
      content: itemContentEncoded,
      categories: categories.length > 0 ? categories : ['Market Insights'],
      pubDate: itemPubDate,
      creator: itemCreator,
      imageUrl,
    });
  }
  
  return {
    title,
    link,
    description,
    items,
  };
}

/**
 * Extract content from XML tag
 */
function extractTagContent(xml: string, tagName: string): string | null {
  // Handle namespaced tags (e.g., content:encoded, dc:creator)
  const escapedTagName = tagName.replace(/:/g, '\\:');
  const regex = new RegExp(`<${escapedTagName}[^>]*>(.*?)<\/${escapedTagName}>`, 's');
  const match = xml.match(regex);
  if (match && match[1]) {
    return match[1].trim();
  }
  return null;
}

/**
 * Fetch and parse RSS feed from URL
 */
export async function fetchRSSFeed(feedUrl: string): Promise<RSSFeed> {
  try {
    const response = await fetch(feedUrl, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.statusText}`);
    }
    
    const xmlString = await response.text();
    return parseRSSFeed(xmlString);
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    throw error;
  }
}

