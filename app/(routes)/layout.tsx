import type { Metadata } from 'next'
import 'styles/global.css'
import 'styles/font.css'
import { Navigation } from 'components/layout/Navigation'
import { Footer } from 'components/layout/Footer'
import meta from 'assets/meta'
import { Hydrate } from './Hydrate'
import { startPageLoader } from './loader'

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { posts } = await startPageLoader()
  return (
    <html lang="ko">
      <body>
        <Hydrate state={{ posts }}>
          <Navigation />
        </Hydrate>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
