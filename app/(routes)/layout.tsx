import type { Metadata } from 'next'
import 'styles/global.css'
import 'styles/font.css'
import 'styles/themes.css'
import meta from 'assets/meta'
import { Navigation } from 'features/navigation/containers/Navigation'
import { Suspense } from 'react'
import { Hydrate } from './(util)/Hydrate'
import { Providers } from './(util)/Providers'
import { startPageLoader } from './server'

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { posts, about } = await startPageLoader()
  return (
    <html lang="ko">
      <body>
        <Providers>
          <Hydrate state={{ posts, about }} />
          <Navigation />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
