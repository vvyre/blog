import type { BlockObjectResponse } from '@notionhq/client'
import { Spacing } from 'components/base/Spacing'
import { Section } from 'components/layout/Section'
import { RenderNotion } from 'features/notion'
import { getCachedPostList, getPost } from 'features/notion/utils/notionFetch.util'
import { pageMeta } from 'features/notion/utils/pageMeta.util'
import { processBlock } from 'features/notion/utils/processBlock'
import { Top } from 'features/post/containers/Top'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import { ENV } from 'static/env'

export interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = await getCachedPostList(ENV.NOTION_DATABASE_ID)
  return posts.map(post => {
    return {
      year: String(pageMeta(post).date.slice(0, 4)),
      slug: pageMeta(post).slug,
    }
  })
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const posts = await getCachedPostList(ENV.NOTION_DATABASE_ID)
  const { slug } = await params
  const [matchPost] = posts.filter(post => pageMeta(post).slug === slug)
  const title = `${pageMeta(matchPost).title} – `
  const description = pageMeta(matchPost).summary

  return {
    title,
    description,
    keywords: '',
    openGraph: {},
  }
}

export default async function Post({ params }: PostPageProps) {
  const posts = await getCachedPostList(ENV.NOTION_DATABASE_ID)
  const { slug } = await params
  const [matchPost] = posts.filter(post => pageMeta(post).slug === slug)
  const meta = pageMeta(matchPost)
  let post: BlockObjectResponse[] = []

  try {
    post = await getPost(matchPost.id)
  } catch (err) {
    console.info(err)
  }

  const blocks = await processBlock(post)

  return (
    <>
      <Top meta={meta} />
      <Spacing size={12} />

      <Section>
        <Suspense fallback={<>...</>}>
          <RenderNotion blocks={blocks} />
          <Spacing size={12} />
        </Suspense>
      </Section>
      <Spacing size={20} />
    </>
  )
}
