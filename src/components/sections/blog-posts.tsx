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
};

const blogPosts: BlogPost[] = [
  {
    imageUrl:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center',
    category: 'Mortgage Rates',
    categoryLink:
      'https://www.simplifyingthemarket.com/en/category/mortgage-rates/',
    title: "The Latest Mortgage Rate Forecasts: Don't Delay Your Move",
    postLink:
      'https://www.simplifyingthemarket.com/en/2025/07/22/the-latest-mortgage-rate-forecasts-infographic',
    author: 'Simplifying the Market',
    date: 'July 22, 2025',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center',
    category: 'Selling Tips',
    categoryLink:
      'https://www.simplifyingthemarket.com/en/category/selling-tips/',
    title: "Don't Make These Mistakes When Selling Your House",
    postLink:
      'https://www.simplifyingthemarket.com/en/2025/07/21/dont-make-these-mistakes-when-selling-your-house',
    author: 'Simplifying the Market',
    date: 'July 21, 2025',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=center',
    category: 'New Construction',
    categoryLink:
      'https://www.simplifyingthemarket.com/en/category/new-construction/',
    title: 'Why a Newly Built Home Might Be the Move Right Now',
    postLink:
      'https://www.simplifyingthemarket.com/en/2025/07/17/why-a-newly-built-home-might-be-the-move-right-now',
    author: 'Simplifying the Market',
    date: 'July 17, 2025',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop&crop=center',
    category: 'Buying & Selling',
    categoryLink:
      'https://www.simplifyingthemarket.com/en/category/buying-selling/',
    title: "Selling and Buying at the Same Time: Here's What You Need to Know",
    postLink:
      'https://www.simplifyingthemarket.com/en/2025/07/09/selling-and-buying-at-the-same-time-heres-what-you-need-to-know',
    author: 'Simplifying the Market',
    date: 'July 9, 2025',
  },
];

const BlogPostCard = ({ post }: { post: BlogPost }) => {
  return (
    <Card className='group overflow-hidden h-full hover:shadow-xl transition-all duration-300'>
      <Link
        href={post.postLink}
        target='_blank'
        rel='noopener noreferrer'
        prefetch={false}
        className='block relative w-full h-[190px] overflow-hidden'
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
          className='w-fit mb-2 text-[#007BFF] border-[#007BFF]/30'
        >
          <Link
            href={post.categoryLink}
            target='_blank'
            rel='noopener noreferrer'
            prefetch={false}
            className='hover:underline'
          >
            {post.category}
          </Link>
        </Badge>
        <CardTitle className='group-hover:text-[#007BFF] transition-colors duration-300'>
          <Link
            href={post.postLink}
            target='_blank'
            rel='noopener noreferrer'
            prefetch={false}
          >
            {post.title}
          </Link>
        </CardTitle>
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

const BlogPosts = () => {
  return (
    <section className='bg-[#F8F9FA] py-20'>
      <div className='max-w-[1200px] mx-auto px-5'>
        <h2 className='text-[32px] font-primary font-regular text-[#333333] text-center mb-12'>
          Latest Market Insights
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]'>
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
        </div>
        <div className='text-center mt-12'>
          <Link
            href='https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18'
            target='_blank'
            rel='noopener noreferrer'
            prefetch={false}
            className='inline-block bg-[#2C3E50] text-white font-primary font-medium text-sm py-[10px] px-6 rounded-lg hover:bg-[#333333] transition-colors duration-300'
          >
            View All Market Insights
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
