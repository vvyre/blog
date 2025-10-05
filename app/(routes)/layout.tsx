import type { Metadata } from 'next'
import 'styles/global.css'
import 'styles/font.css'
import 'styles/themes.css'
import { Navigation } from 'features/navigation/Navigation'
import { Footer } from 'components/layout/Footer'
import meta from 'assets/meta'
import { Hydrate } from './(util)/Hydrate'
import { startPageLoader } from './server'
import { Providers } from './(util)/Providers'

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
        <Providers>
          <Hydrate state={{ posts }} />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
