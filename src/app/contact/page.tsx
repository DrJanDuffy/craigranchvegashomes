import PageLayout from '@/components/layout/page-layout';
import ContactForm from '@/components/sections/contact-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Craig Ranch Vegas Homes | Las Vegas Real Estate',
  description:
    'Get in touch with Craig Ranch Vegas Homes. Contact our expert real estate team for buying, selling, or investing in Craig Ranch, Las Vegas.',
};

export default function ContactPage() {
  return (
    <PageLayout>
      <div className='bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>Contact Us</h1>
          <p className='text-xl text-gray-200 max-w-3xl'>
            Ready to find your dream home in Craig Ranch? Get in touch with our
            expert real estate team today.
          </p>
        </div>
      </div>

      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12'>
            {/* Contact Form */}
            <div>
              <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className='space-y-6'>
              <Card className='border-0 shadow-lg'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <Phone className='h-5 w-5 text-[#3A8DDE]' />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-lg font-semibold text-[#0A2540]'>
                    (702) 555-0123
                  </p>
                  <p className='text-gray-600 text-sm mt-1'>
                    Available Monday - Saturday, 9 AM - 6 PM
                  </p>
                </CardContent>
              </Card>

              <Card className='border-0 shadow-lg'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <Mail className='h-5 w-5 text-[#16B286]' />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-lg font-semibold text-[#0A2540]'>
                    info@craigranchvegas.com
                  </p>
                  <p className='text-gray-600 text-sm mt-1'>
                    We typically respond within 24 hours
                  </p>
                </CardContent>
              </Card>

              <Card className='border-0 shadow-lg'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <MapPin className='h-5 w-5 text-[#0A2540]' />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-lg font-semibold text-[#0A2540]'>
                    Craig Ranch
                  </p>
                  <p className='text-gray-600 text-sm mt-1'>
                    Las Vegas, NV 89031
                  </p>
                </CardContent>
              </Card>

              <Card className='border-0 shadow-lg bg-[#F7F9FC]'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <Clock className='h-5 w-5 text-[#3A8DDE]' />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='space-y-2 text-sm'>
                    <div className='flex justify-between'>
                      <span className='text-gray-600'>Monday - Friday:</span>
                      <span className='font-semibold'>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-gray-600'>Saturday:</span>
                      <span className='font-semibold'>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-gray-600'>Sunday:</span>
                      <span className='font-semibold'>By Appointment</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='w-16 h-16 bg-[#3A8DDE]/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
            <MessageSquare className='h-8 w-8 text-[#3A8DDE]' />
          </div>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
            Ready to Get Started?
          </h2>
          <p className='text-lg text-gray-600 mb-8'>
            Browse our available properties or schedule a consultation to
            discuss your real estate needs in Craig Ranch.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              asChild
              size='lg'
              className='bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white'
            >
              <Link href='/homes'>View Available Homes</Link>
            </Button>
            <Button asChild size='lg' variant='outline'>
              <Link
                href='http://drjanduffy.realscout.com/onboarding'
                target='_blank'
                rel='noopener noreferrer'
                prefetch={false}
              >
                Schedule Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
