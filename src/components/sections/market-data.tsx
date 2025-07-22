'use client';

export default function MarketDataSection() {
  const marketStats = [
    {
      label: 'Average Home Price',
      value: '$875,000',
      change: '+5.2%',
      changeType: 'positive',
      description: 'vs last year'
    },
    {
      label: 'Days on Market',
      value: '23',
      change: '-12%',
      changeType: 'positive',
      description: 'vs last year'
    },
    {
      label: 'Active Listings',
      value: '156',
      change: '+8.5%',
      changeType: 'neutral',
      description: 'vs last month'
    },
    {
      label: 'Price per Sq Ft',
      value: '$285',
      change: '+3.1%',
      changeType: 'positive',
      description: 'vs last year'
    }
  ];

  return (
    <section className='py-20 bg-gradient-to-r from-[#0A2540] to-[#3A8DDE]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-white mb-4'>
            Craig Ranch Market Data
          </h2>
          <p className='text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed'>
            Stay informed with the latest real estate market trends and statistics
          </p>
        </div>

        {/* Market Stats Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {marketStats.map((stat, index) => (
            <div
              key={index}
              className='bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20'
            >
              <h3 className='text-white text-lg font-medium mb-2'>
                {stat.label}
              </h3>
              <div className='text-3xl font-bold text-white mb-2'>
                {stat.value}
              </div>
              <div className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-[#16B286]' : 
                stat.changeType === 'negative' ? 'text-red-400' : 
                'text-gray-300'
              }`}>
                {stat.change}
              </div>
              <p className='text-gray-300 text-sm mt-1'>
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Market Insights */}
        <div className='mt-16 text-center'>
          <div className='bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Market Insights
            </h3>
            <p className='text-gray-200 text-lg leading-relaxed max-w-4xl mx-auto'>
              The Craig Ranch market continues to show strong growth with increasing demand 
              for luxury homes. Properties are selling faster than ever, with an average 
              of 23 days on market. The area&apos;s excellent schools, amenities, and 
              convenient location continue to drive buyer interest.
            </p>
            <button className='mt-6 bg-[#16B286] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#15A276] transition-colors duration-200'>
              View Full Market Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 