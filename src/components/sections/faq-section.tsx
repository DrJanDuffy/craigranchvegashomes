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
        "Craig Ranch is a master-planned community in North Las Vegas, winner of 'Best Planned Community' in 2020. It offers family-friendly homes, excellent schools, 170-acre Craig Ranch Regional Park, 5 miles of trails, and convenient access to shopping, dining, and major highways. The tight-knit community is united around the park, which hosts over 40 events per year.",
    },
    {
      question: 'What is the average price range for homes in Craig Ranch?',
      answer:
        'Home prices in Craig Ranch range from $370,000 to $1.8 million, depending on the property type, size, and location. The average home value is $427,967, with an average price per square foot of $242. The median sale price is $415,000.',
    },
    {
      question: 'How long do properties typically stay on the market?',
      answer:
        "Properties in Craig Ranch sell after an average of 46 days on market, which is faster than the national average of 53 days. The area's strong demand, excellent schools, and desirable location contribute to steady sales.",
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
