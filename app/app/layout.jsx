export const metadata = {
  title: 'Pablo Navarro',
  description: 'Show acústico',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
