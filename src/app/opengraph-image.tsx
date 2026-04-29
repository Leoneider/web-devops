import { ImageResponse } from 'next/og';

export const alt = 'Leoneider Trigos - DevOps & AI Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
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
          backgroundColor: '#0a1410',
          backgroundImage: 'radial-gradient(circle at 50% 50%, #1c2620, #0a1410)',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Background Grid Accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'linear-gradient(rgba(0, 255, 159, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 159, 0.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Top Status Badge */}
        <div
          style={{
            display: 'flex',
            padding: '12px 32px',
            border: '1px solid rgba(0, 255, 159, 0.3)',
            borderRadius: '9999px',
            backgroundColor: 'rgba(0, 255, 159, 0.05)',
            marginBottom: '40px',
            boxShadow: '0 0 20px rgba(0, 255, 159, 0.1)',
          }}
        >
          <span
            style={{
              color: '#00ff9f',
              fontSize: '20px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            Identidad: DevOps42 // Estado: Online
          </span>
        </div>

        {/* Main Hero Headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            lineHeight: 1.1,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: '90px',
              fontWeight: 'bold',
              color: 'white',
              margin: '0',
              letterSpacing: '-0.02em',
              gap: '24px',
            }}
          >
            DESARROLLO <span style={{ color: '#00ff9f', textShadow: '0 0 30px rgba(0,255,159,0.5)' }}>IMPULSADO</span>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: '90px',
              fontWeight: 'bold',
              color: 'white',
              margin: '20px 0 0 0',
              letterSpacing: '-0.02em',
              gap: '24px',
            }}
          >
            POR <span style={{ color: '#00ff9f', textShadow: '0 0 30px rgba(0,255,159,0.5)' }}>IA</span>
          </div>
        </div>

        {/* Subtitle / Footer */}
        <p
          style={{
            fontSize: '32px',
            color: '#b9cbca', // text-on-surface-variant
            marginTop: '60px',
            fontWeight: 'normal',
            letterSpacing: '0.05em',
            maxWidth: '900px',
            textAlign: 'center',
            lineHeight: 1.5,
          }}
        >
          Leoneider Trigos • DevOps & AI Engineer
        </p>

      </div>
    ),
    {
      ...size,
    }
  );
}
