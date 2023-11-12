import './globals.css'

export const metadata = {
  title: 'Paricutin',
  description: 'Photogrammetry of a paricutin volcano rock',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">{children}</body>
    </html>
  )
}
