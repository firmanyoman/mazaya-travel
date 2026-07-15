import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          padding: 72, color: '#ffffff', background: 'linear-gradient(135deg, #0d6b67 0%, #124b49 58%, #d6a43a 160%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 30, fontWeight: 700, letterSpacing: 2 }}>MAZAYA TRAVEL</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', fontSize: 70, fontWeight: 800, lineHeight: 1.1 }}>Umrah dari Bone,<br />dengan pendampingan yang jelas.</div>
          <div style={{ display: 'flex', fontSize: 28, color: '#e9f4f2' }}>Paket • Legalitas • Konsultasi keluarga</div>
        </div>
        <div style={{ display: 'flex', fontSize: 24, color: '#f9db8c' }}>mazayatravel.co.id</div>
      </div>
    ),
    size,
  )
}
