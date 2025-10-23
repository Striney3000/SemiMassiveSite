import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const title = searchParams.get('title') || 'SemiMassive';
    const subtitle = searchParams.get('subtitle') || 'Future Product Co-Dev';
    const client = searchParams.get('client') || '';
    const year = searchParams.get('year') || '';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            backgroundColor: '#0f0e0d',
            padding: '80px',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {/* Client/Year at top */}
          {(client || year) && (
            <div
              style={{
                display: 'flex',
                fontSize: '28px',
                color: '#a8a49e',
                letterSpacing: '-0.01em',
              }}
            >
              {client} {client && year && '•'} {year}
            </div>
          )}

          {/* Title and subtitle in center */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              flex: 1,
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <div
              style={{
                fontSize: '72px',
                fontWeight: 700,
                color: '#f5f4f2',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                maxWidth: '90%',
              }}
            >
              {title}
            </div>
            {subtitle && (
              <div
                style={{
                  fontSize: '32px',
                  color: '#a8a49e',
                  lineHeight: 1.4,
                  maxWidth: '85%',
                }}
              >
                {subtitle}
              </div>
            )}
          </div>

          {/* Bottom section with aqua rule and branding */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              width: '100%',
            }}
          >
            <div
              style={{
                height: '4px',
                width: '200px',
                background: 'linear-gradient(90deg, #5dd9c1 0%, #3fcfb4 100%)',
                borderRadius: '2px',
              }}
            />
            <div
              style={{
                fontSize: '24px',
                fontWeight: 600,
                color: '#f5f4f2',
                letterSpacing: '-0.01em',
              }}
            >
              Semimassive
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error('OG Image generation error:', error);
    return new Response('Failed to generate image', { status: 500 });
  }
}
