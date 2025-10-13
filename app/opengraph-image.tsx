import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Restaurant Supplies Direct'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: 'white',
            marginBottom: 20,
            textAlign: 'center',
            letterSpacing: '-0.02em',
          }}
        >
          Restaurant Supplies Direct
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#9ca3af',
            textAlign: 'center',
            maxWidth: 800,
          }}
        >
          Premium disposables, packaging, and custom print — shipped direct from the source
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
