'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQSection() {
  const faqs = [
    {
      question: 'What makes Craig Ranch a desirable community?',
      answer:
        "Craig Ranch is one of Las Vegas' most prestigious communities, offering luxury homes with modern amenities, excellent schools, and convenient access to shopping, dining, and entertainment. The area is known for its family-friendly atmosphere and high-quality real estate market.",
    },
    {
      question: 'What is the average price range for homes in Craig Ranch?',
      answer:
        'Home prices in Craig Ranch typically range from $500K to $3M+, depending on the property type, size, and location. Single-family homes average around $875,000, while luxury estates can exceed $1.5M.',
    },
    {
      question: 'How long do properties typically stay on the market?',
      answer:
        "Properties in Craig Ranch sell quickly, with an average of 23 days on market. The area's strong demand and desirable location contribute to faster sales compared to other Las Vegas neighborhoods.",
    },
    {
      question: 'What types of properties are available?',
      answer:
        'We offer a diverse selection including single-family homes, luxury estates, and new construction properties. Each category features different amenities and price points to suit various buyer needs and preferences.',
    },
    {
      question: 'Do you help with financing and mortgage options?',
      answer:
        'Yes, we work with trusted mortgage partners to help you find the best financing options. We can connect you with lenders who specialize in luxury home financing and offer competitive rates.',
    },
    {
      question: 'Can I schedule a property tour?',
      answer:
        'Absolutely! You can schedule a tour through our website or by contacting us directly. We offer both in-person and virtual tours to accommodate your preferences and schedule.',
    },
  ];

  return (
    <section className='py-20 bg-[#F7F9FC]'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-[#0A2540] mb-4'>
            Frequently Asked Questions
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Find answers to common questions about buying and selling in Craig
            Ranch
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type='single' collapsible className='w-full space-y-4'>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className='bg-white rounded-lg px-6 border border-gray-200'
            >
              <AccordionTrigger className='text-left text-lg font-semibold text-[#0A2540] hover:no-underline'>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className='text-gray-600 leading-relaxed pt-2'>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
