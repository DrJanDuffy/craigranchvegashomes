'use client';

import Image from 'next/image';
import Link from 'next/link';

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
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c28de574-2ab5-4dce-b3b9-b55c3e5e3821-totalvegasrealestate-com/assets/images/31651-vegas-home-builders-preview-5.jpg",
    category: "Las Vegas New Construction",
    categoryLink: "https://www.totalvegasrealestate.com/blog/category/las-vegas-new-construction/",
    title: "12 Most Popular Home Builders in Las Vegas, NV: Builders for Every Style & Budget",
    postLink: "https://www.totalvegasrealestate.com/blog/best-custom-home-builders-in-the-las-vegas-area/",
    author: "BY Robert Little",
    date: "7/18/2025"
  },
  {
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c28de574-2ab5-4dce-b3b9-b55c3e5e3821-totalvegasrealestate-com/assets/images/48684-irs-publication-527-preview-6.jpg",
    category: "Buying a Home",
    categoryLink: "https://www.totalvegasrealestate.com/blog/category/buying-a-home/",
    title: "How to Optimize Vacation Rental Taxes with IRS Publication 527",
    postLink: "https://www.totalvegasrealestate.com/blog/vacation-rental-tax-tips/",
    author: "BY Robert Little",
    date: "7/8/2025"
  },
  {
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c28de574-2ab5-4dce-b3b9-b55c3e5e3821-totalvegasrealestate-com/assets/images/48176-buying-first-investment-property-preview-7.jpg",
    category: "Buying a Home",
    categoryLink: "https://www.totalvegasrealestate.com/blog/category/buying-a-home/",
    title: "Buying Your First Rental Property? What First-Time Investors Need to Know",
    postLink: "https://www.totalvegasrealestate.com/blog/buying-first-investment-property/",
    author: "BY Robert Little",
    date: "6/17/2025"
  },
  {
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c28de574-2ab5-4dce-b3b9-b55c3e5e3821-totalvegasrealestate-com/assets/images/34776-henderson-expensive-neighborhoods-preview-8.jpg",
    category: "Henderson Real Estate",
    categoryLink: "https://www.totalvegasrealestate.com/blog/category/henderson-real-estate/",
    title: "Where Are the Most Expensive Homes in Henderson NV? 8 Luxury Neighborhoods",
    postLink: "https://www.totalvegasrealestate.com/blog/most-expensive-neighborhoods-in-henderson-nv/",
    author: "BY Robert Little",
    date: "6/5/2025"
  }
];

const BlogPostCard = ({ post }: { post: BlogPost }) => {
  return (
    <article className="group flex flex-col bg-white rounded-lg shadow-card overflow-hidden text-left h-full">
      <Link href={post.postLink} className="block relative w-full h-[190px] overflow-hidden">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </Link>
      <div className="p-[15px] flex flex-col flex-grow">
        <div className="flex-grow">
          <Link href={post.categoryLink} className="text-[#007BFF] text-xs font-secondary hover:underline w-fit">
            {post.category}
          </Link>
          <Link href={post.postLink}>
            <h3 className="mt-1 font-primary text-[#333333] transition-colors duration-300 group-hover:text-[#007BFF] text-[19px] leading-tight font-light">
              {post.title}
            </h3>
          </Link>
        </div>
        <div className="mt-4">
          <p className="text-[#666666] text-xs font-secondary uppercase">{post.author}</p>
          <p className="text-[#666666] text-xs font-secondary">{post.date}</p>
        </div>
      </div>
    </article>
  );
};

const BlogPosts = () => {
  return (
    <section className="bg-[#F8F9FA] py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-[32px] font-primary font-regular text-[#333333] text-center mb-12">
          Recently from Our Blog
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="https://www.totalvegasrealestate.com/blog/"
            className="inline-block bg-[#2C3E50] text-white font-primary font-medium text-sm py-[10px] px-6 rounded-lg hover:bg-[#333333] transition-colors duration-300"
          >
            View All Blog Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts; 