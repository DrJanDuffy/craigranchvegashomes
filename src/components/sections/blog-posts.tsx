'use client';

export default function BlogPosts() {
  const blogPosts = [
    {
      title: 'Top 5 Reasons to Buy in Craig Ranch',
      excerpt: 'Discover why Craig Ranch is one of Las Vegas\' most sought-after communities for homebuyers.',
      author: 'Sarah Johnson',
      date: 'July 15, 2024',
      readTime: '5 min read',
      category: 'Buying Guide'
    },
    {
      title: 'Market Update: Craig Ranch Home Values',
      excerpt: 'Latest insights on property values and market trends in the Craig Ranch area.',
      author: 'Mike Chen',
      date: 'July 12, 2024',
      readTime: '3 min read',
      category: 'Market Analysis'
    },
    {
      title: 'New Construction: What\'s Coming to Craig Ranch',
      excerpt: 'Explore the latest new construction projects and developments in our community.',
      author: 'Lisa Rodriguez',
      date: 'July 10, 2024',
      readTime: '4 min read',
      category: 'Development'
    }
  ];

  return (
    <section className='py-20 bg-[#F7F9FC]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-[#0A2540] mb-4'>
            Latest Insights
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Stay informed with expert insights and market updates from our real estate professionals
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className='grid md:grid-cols-3 gap-8'>
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className='bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'
            >
              {/* Placeholder for blog image */}
              <div className='h-48 bg-gradient-to-br from-[#0A2540] to-[#3A8DDE] flex items-center justify-center'>
                <div className='text-white text-center'>
                  <div className='text-4xl mb-2'>📰</div>
                  <div className='text-sm opacity-80'>Blog Image</div>
                </div>
              </div>
              
              <div className='p-6'>
                <div className='flex items-center gap-2 mb-3'>
                  <span className='bg-[#16B286] text-white px-3 py-1 rounded-full text-xs font-medium'>
                    {post.category}
                  </span>
                  <span className='text-gray-500 text-sm'>
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className='text-xl font-semibold text-[#0A2540] mb-3 leading-tight'>
                  {post.title}
                </h3>
                
                <p className='text-gray-600 mb-4 leading-relaxed'>
                  {post.excerpt}
                </p>
                
                <div className='flex items-center justify-between text-sm text-gray-500 mb-4'>
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                </div>
                
                <button className='text-[#3A8DDE] font-semibold hover:text-[#2A7DCE] transition-colors duration-200'>
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className='text-center mt-12'>
          <button className='bg-[#3A8DDE] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2A7DCE] transition-colors duration-200'>
            View All Blog Posts
          </button>
        </div>
      </div>
    </section>
  );
} 