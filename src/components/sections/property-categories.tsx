'use client';

export default function PropertyCategories() {
  const categories = [
    {
      title: 'Single Family Homes',
      description: 'Spacious family homes with modern amenities',
      price: '$500K - $1.2M',
      image: '/images/single-family.jpg',
      count: '24 Available'
    },
    {
      title: 'Luxury Estates',
      description: 'Premium properties with exceptional finishes',
      price: '$1.5M - $3M+',
      image: '/images/luxury-estates.jpg',
      count: '8 Available'
    },
    {
      title: 'New Construction',
      description: 'Brand new homes with latest features',
      price: '$600K - $1.8M',
      image: '/images/new-construction.jpg',
      count: '12 Available'
    }
  ];

  return (
    <section className='py-20 bg-[#F7F9FC]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-[#0A2540] mb-4'>
            Property Categories
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Explore our diverse selection of premium properties in Craig Ranch
          </p>
        </div>

        {/* Property Categories Grid */}
        <div className='grid md:grid-cols-3 gap-8'>
          {categories.map((category, index) => (
            <div
              key={index}
              className='bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2'
            >
              {/* Placeholder for image */}
              <div className='h-48 bg-gradient-to-br from-[#0A2540] to-[#3A8DDE] flex items-center justify-center'>
                <div className='text-white text-center'>
                  <div className='text-4xl mb-2'>🏠</div>
                  <div className='text-sm opacity-80'>Property Image</div>
                </div>
              </div>
              
              <div className='p-6'>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-2'>
                  {category.title}
                </h3>
                <p className='text-gray-600 mb-4 leading-relaxed'>
                  {category.description}
                </p>
                <div className='flex justify-between items-center'>
                  <span className='text-[#16B286] font-semibold text-lg'>
                    {category.price}
                  </span>
                  <span className='text-sm text-gray-500'>
                    {category.count}
                  </span>
                </div>
                <button className='w-full mt-4 bg-[#3A8DDE] text-white py-3 rounded-lg font-semibold hover:bg-[#2A7DCE] transition-colors duration-200'>
                  View Properties
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 