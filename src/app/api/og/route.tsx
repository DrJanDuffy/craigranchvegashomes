/**
 * Dynamic OG Image Generation
 * Uses next/og with ImageResponse for dynamic Open Graph images
 */

import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Get parameters from URL
    const title =
      searchParams.get('title') || 'Craig Ranch Vegas | Homes By Dr. Jan Duffy';
    const subtitle = searchParams.get('subtitle') || 'Luxury Real Estate in Las Vegas';
    const price = searchParams.get('price');
    const address = searchParams.get('address');

    // Generate OG image
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0A2540',
            backgroundImage: 'linear-gradient(to bottom, #0A2540, #3A8DDE)',
            fontSize: 60,
            fontWeight: 700,
            color: 'white',
            padding: '80px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              width: '100%',
              maxWidth: '1000px',
            }}
          >
            <h1
              style={{
                fontSize: 72,
                fontWeight: 800,
                marginBottom: 20,
                lineHeight: 1.2,
              }}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                style={{
                  fontSize: 36,
                  fontWeight: 400,
                  marginBottom: 40,
                  opacity: 0.9,
                }}
              >
                {subtitle}
              </p>
            )}
            {price && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  fontSize: 48,
                  fontWeight: 700,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '24px 48px',
                  borderRadius: '12px',
                  marginTop: 20,
                }}
              >
                <span>$</span>
                <span>{price}</span>
              </div>
            )}
            {address && (
              <p
                style={{
                  fontSize: 28,
                  fontWeight: 400,
                  marginTop: 30,
                  opacity: 0.8,
                }}
              >
                {address}
              </p>
            )}
            <div
              style={{
                position: 'absolute',
                bottom: 40,
                right: 40,
                fontSize: 24,
                opacity: 0.7,
              }}
            >
              www.craigranchhomes.com
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.error('Error generating OG image:', e);
    return new Response(`Failed to generate OG image: ${e.message}`, {
      status: 500,
    });
  }
}




