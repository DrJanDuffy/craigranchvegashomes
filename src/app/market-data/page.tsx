import PageLayout from '@/components/layout/page-layout';
import MarketDataSection from '@/components/sections/market-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, DollarSign, Home, Calendar, BarChart3 } from 'lucide-react';

export const metadata = {
  title: 'Craig Ranch Real Estate Market Data & Trends | Las Vegas',
  description: 'Stay informed with the latest real estate market data, trends, and statistics for Craig Ranch, Las Vegas. Average prices, days on market, and more.',
};

export default function MarketDataPage() {
  const trends = [
    {
      period: 'Last 30 Days',
      priceChange: '+2.1%',
      salesVolume: '+15%',
      inventory: '+8%',
      avgDaysOnMarket: 21,
      trend: 'up' as const,
    },
    {
      period: 'Last 90 Days',
      priceChange: '+4.3%',
      salesVolume: '+22%',
      inventory: '+12%',
      avgDaysOnMarket: 23,
      trend: 'up' as const,
    },
    {
      period: 'Last Year',
      priceChange: '+5.2%',
      salesVolume: '+18%',
      inventory: '+5%',
      avgDaysOnMarket: 25,
      trend: 'up' as const,
    },
  ];

  const insights = [
    {
      title: 'Strong Seller\'s Market',
      description: 'Properties are selling quickly with multiple offers common',
      icon: TrendingUp,
      color: 'text-[#16B286]',
    },
    {
      title: 'Price Appreciation',
      description: 'Consistent year-over-year growth in home values',
      icon: DollarSign,
      color: 'text-[#3A8DDE]',
    },
    {
      title: 'High Demand',
      description: 'Growing interest from buyers seeking luxury homes',
      icon: Home,
      color: 'text-[#0A2540]',
    },
  ];

  return (
    <PageLayout>
      <div className="bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Craig Ranch Market Data
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Stay informed with the latest real estate market trends, statistics, 
            and insights for Craig Ranch, Las Vegas.
          </p>
        </div>
      </div>

      <MarketDataSection />

      {/* Market Trends */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-[#3A8DDE]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="h-8 w-8 text-[#3A8DDE]" />
            </div>
            <h2 className="text-3xl font-bold text-[#0A2540] mb-4">
              Market Trends Over Time
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Track how the Craig Ranch market has evolved
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {trends.map((trend, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{trend.period}</CardTitle>
                  <Badge variant="outline" className="w-fit">
                    {trend.trend === 'up' ? (
                      <TrendingUp className="h-3 w-3 mr-1 text-[#16B286]" />
                    ) : (
                      <TrendingDown className="h-3 w-3 mr-1 text-red-500" />
                    )}
                    {trend.trend === 'up' ? 'Growth' : 'Decline'}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Price Change:</span>
                    <Badge className="bg-[#16B286] text-white">
                      {trend.priceChange}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sales Volume:</span>
                    <Badge className="bg-[#3A8DDE] text-white">
                      {trend.salesVolume}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Inventory:</span>
                    <Badge variant="secondary">
                      {trend.inventory}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t">
                    <span className="text-gray-600">Avg Days on Market:</span>
                    <span className="font-semibold">{trend.avgDaysOnMarket}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A2540] mb-4">
              Market Insights
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key factors driving the Craig Ranch real estate market
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {insights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className={`w-12 h-12 bg-[${insight.color}]/10 rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className={`h-6 w-6 ${insight.color}`} />
                    </div>
                    <CardTitle>{insight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {insight.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Market Outlook */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-[#0A2540]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-[#0A2540]" />
              </div>
              <CardTitle className="text-2xl">Market Outlook</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                The Craig Ranch market continues to show strong growth with increasing demand 
                for luxury homes. Properties are selling faster than ever, with an average 
                of 23 days on market. The area&apos;s excellent schools, amenities, and 
                convenient location continue to drive buyer interest.
              </p>
              <p>
                Looking ahead, we expect continued appreciation in home values as the Las Vegas 
                market remains strong and Craig Ranch maintains its position as one of the 
                most desirable communities in the valley. New construction projects and 
                infrastructure improvements are further enhancing the area&apos;s appeal.
              </p>
              <p>
                For buyers, this means acting quickly on desirable properties. For sellers, 
                it&apos;s an excellent time to list, with strong demand and competitive pricing 
                opportunities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
}

