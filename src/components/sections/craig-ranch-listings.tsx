'use client';

import { useIsMobile } from '@/hooks';
import { useEffect, useRef } from 'react';

type CraigRanchListingsProps = {
  priceMin?: string;
  priceMax?: string;
  showMap?: boolean;
  listingsPerPage?: string;
};

export default function CraigRanchListings({
  priceMin = '400000',
  priceMax = '500000',
  showMap = true,
  listingsPerPage = '12',
}: CraigRanchListingsProps) {
  const isMobile = useIsMobile();
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create the RealScout widget element dynamically
    if (widgetRef.current && typeof window !== 'undefined') {
      const widget = document.createElement('realscout-office-listings');
      widget.setAttribute('agent-encoded-id', 'QWdlbnQtMjI1MDUw');
      widget.setAttribute('sort-order', 'STATUS_AND_SIGNIFICANT_CHANGE');
      widget.setAttribute('listing-status', 'For Sale');
      widget.setAttribute('property-types', 'SFR,MF,TC');
      widget.setAttribute('price-min', priceMin);
      widget.setAttribute('price-max', priceMax);
      widget.setAttribute('layout', isMobile ? 'mobile' : 'desktop');
      widget.setAttribute('show-filters', 'true');
      widget.setAttribute('show-sort', 'true');
      widget.setAttribute('show-map', showMap ? 'true' : 'false');
      widget.setAttribute('map-height', '400px');
      widget.setAttribute('listings-per-page', listingsPerPage);
      widget.setAttribute('show-pagination', 'true');

      // Clear existing content and append the widget
      widgetRef.current.innerHTML = '';
      widgetRef.current.appendChild(widget);
    }
  }, [isMobile, priceMin, priceMax, showMap, listingsPerPage]);

  return (
    <div
      ref={widgetRef}
      className='real-estate-listings-container min-h-[400px] flex items-center justify-center'
    >
      <div className='text-center'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#3A8DDE] mx-auto mb-4'></div>
        <p className='text-gray-500 text-sm'>
          Loading Craig Ranch properties...
        </p>
      </div>
    </div>
  );
}

