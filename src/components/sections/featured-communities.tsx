'use client';

export default function FeaturedCommunities() {
  const communities = [
    {
      name: 'Craig Ranch North',
      description: 'Family-friendly area with excellent schools',
      avgPrice: '$750K',
      homesAvailable: 15,
      amenities: ['Top Schools', 'Parks', 'Shopping']
    },
    {
      name: 'Craig Ranch Estates',
      description: 'Luxury homes with premium amenities',
      avgPrice: '$1.2M',
      homesAvailable: 8,
      amenities: ['Golf Course', 'Clubhouse', 'Pool']
    },
    {
      name: 'Craig Ranch Village',
      description: 'Convenient location near shopping and dining',
      avgPrice: '$650K',
      homesAvailable: 22,
      amenities: ['Shopping Center', 'Restaurants', 'Transit']
    }
  ];

  return (
    <section className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-[#0A2540] mb-4'>
            Featured Communities
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Discover the unique character of each area within Craig Ranch
          </p>
        </div>

        {/* Communities Grid */}
        <div className='grid md:grid-cols-3 gap-8'>
          {communities.map((community, index) => (
            <div
              key={index}
              className='bg-[#F7F9FC] rounded-xl p-8 hover:shadow-lg transition-shadow duration-300'
            >
              <h3 className='text-2xl font-semibold text-[#0A2540] mb-3'>
                {community.name}
              </h3>
              <p className='text-gray-600 mb-6 leading-relaxed'>
                {community.description}
              </p>
              
              <div className='space-y-4 mb-6'>
                <div className='flex justify-between items-center'>
                  <span className='text-gray-600'>Average Price:</span>
                  <span className='text-[#16B286] font-semibold text-lg'>
                    {community.avgPrice}
                  </span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-gray-600'>Homes Available:</span>
                  <span className='text-[#3A8DDE] font-semibold'>
                    {community.homesAvailable}
                  </span>
                </div>
              </div>
              
              <div className='mb-6'>
                <h4 className='text-sm font-semibold text-[#0A2540] mb-2'>
                  Key Amenities:
                </h4>
                <div className='flex flex-wrap gap-2'>
                  {community.amenities.map((amenity, amenityIndex) => (
                    <span
                      key={amenityIndex}
                      className='bg-white px-3 py-1 rounded-full text-sm text-[#0A2540] border border-gray-200'
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
              
              <button className='w-full bg-[#3A8DDE] text-white py-3 rounded-lg font-semibold hover:bg-[#2A7DCE] transition-colors duration-200'>
                Explore {community.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 