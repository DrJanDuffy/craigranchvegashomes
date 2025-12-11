/**
 * Blog Posts Component
 * Fetches blog posts from RSS feed API
 * Server component by default (Next.js 16)
 */

import Image from 'next/image';
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

type BlogPost = {
  imageUrl: string;
  category: string;
  categoryLink: string;
  title: string;
  postLink: string;
  author: string;
  date: string;
  description?: string;
};

/**
 * Fetch blog posts from API
 */
async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/blog-posts`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }

    const data = await response.json();
    return data.blogPosts || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    // Return fallback data
    return [
      {
        imageUrl: '/placeholder-blog.jpg',
        category: 'Market Insights',
        categoryLink:
          'https://www.simplifyingthemarket.com/?a=956758-ef2edda2f940e018328655620ea05f18',
        title: 'Latest Market Insights',
        postLink:
          'https://www.simplifyingthemarket.com/?a=956758-ef2edda2f940e018328655620ea05f18',
        author: 'Simplifying the Market',
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        description: 'Stay informed with the latest real estate market insights',
      },
    ];
  }
}

const BlogPostCard = ({ post }: { post: BlogPost }) => {
  return (
    <Card
      className='group overflow-hidden h-full hover:shadow-xl transition-all duration-300'
      role='article'
      aria-label={`Blog post: ${post.title}`}
    >
      <Link
        href={post.postLink}
        target='_blank'
        rel='noopener noreferrer'
        prefetch={false}
        className='block relative w-full h-[190px] overflow-hidden'
        aria-label={`Read article: ${post.title}`}
      >
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
          className='object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
          loading='lazy'
          quality={85}
        />
      </Link>
      <CardHeader>
        <Badge
          variant='outline'
          className='w-fit mb-2 text-[#3A8DDE] border-[#3A8DDE]/30'
        >
          <Link
            href={post.categoryLink}
            target='_blank'
            rel='noopener noreferrer'
            prefetch={false}
            className='hover:underline'
            aria-label={`View ${post.category} category`}
          >
            {post.category}
          </Link>
        </Badge>
        <CardTitle className='group-hover:text-[#3A8DDE] transition-colors duration-300'>
          <Link
            href={post.postLink}
            target='_blank'
            rel='noopener noreferrer'
            prefetch={false}
            className='line-clamp-2'
          >
            {post.title}
          </Link>
        </CardTitle>
        {post.description && (
          <CardDescription className='line-clamp-2 mt-2'>
            {post.description}
          </CardDescription>
        )}
      </CardHeader>
      <CardFooter className='flex-col items-start gap-2 pt-0'>
        <CardDescription className='text-xs uppercase'>
          {post.author}
        </CardDescription>
        <CardDescription className='text-xs'>{post.date}</CardDescription>
      </CardFooter>
    </Card>
  );
};

const BlogPosts = async () => {
  const blogPosts = await getBlogPosts();

  return (
    <section
      className='bg-[#F8F9FA] py-20'
      aria-labelledby='blog-posts-heading'
    >
      <div className='max-w-[1200px] mx-auto px-5'>
        <h2
          id='blog-posts-heading'
          className='text-[32px] font-primary font-regular text-[#333333] text-center mb-12'
        >
          Latest Market Insights
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]'>
          {blogPosts.map((post, index) => (
            <BlogPostCard key={`${post.postLink}-${index}`} post={post} />
          ))}
        </div>
        <div className='text-center mt-12'>
          <Link
            href='https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18'
            target='_blank'
            rel='noopener noreferrer'
            prefetch={false}
            className='inline-block bg-[#3A8DDE] text-white font-primary font-medium text-sm py-[10px] px-6 rounded-lg hover:bg-[#2A7DCE] transition-colors duration-300'
            aria-label='View all market insights'
          >
            View All Market Insights
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
