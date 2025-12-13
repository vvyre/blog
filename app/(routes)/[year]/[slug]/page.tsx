import type { BlockObjectResponse } from '@notionhq/client'
import { Hydrate } from 'app/(routes)/(util)/Hydrate'
import logo from 'assets/logo.svg'
import siteMeta from 'assets/meta'
import { Spacing } from 'components/base/Spacing'
import { Section } from 'components/layout/Section'
import { processBlock, RenderNotion, getCachedPostList, getPost, getNotionPageMeta } from 'features/notion'
import { Top } from 'features/post/containers/Top'
import { TableOfContentsContainer } from 'features/tableOfContents'
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
      year: String(getNotionPageMeta(post).date.slice(0, 4)),
      slug: getNotionPageMeta(post).slug,
    }
  })
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const posts = await getCachedPostList(ENV.NOTION_DATABASE_ID)
  const { slug } = await params
  const [matchPost] = posts.filter(post => getNotionPageMeta(post).slug === slug)
  const meta = getNotionPageMeta(matchPost)
  const title = `${meta.title} – ${siteMeta.title}`
  const description = meta.summary
  const keywords = meta.tags.map(t => t.name)

  return {
    title,
    description,
    keywords: keywords,
    authors: { name: siteMeta.author, url: ENV.NEXT_PUBLIC_ROOT },
    openGraph: {
      title,
      description,
      images: { url: logo.src },
      tags: keywords,
    },
  }
}

export default async function Post({ params }: PostPageProps) {
  const posts = await getCachedPostList(ENV.NOTION_DATABASE_ID)
  const { slug } = await params
  const [matchPost] = posts.filter(post => getNotionPageMeta(post).slug === slug)
  const meta = getNotionPageMeta(matchPost)
  let post: BlockObjectResponse[] = []

  try {
    post = await getPost(matchPost.id)
  } catch (err) {
    console.info(err)
  }

  const currentPost = await processBlock(post)

  return (
    <>
      <Hydrate state={{ currentPost }} />

      <Top meta={meta} />

      <TableOfContentsContainer />
      <Spacing size={12} />

      <Section>
        <Suspense fallback={<>...</>}>
          <RenderNotion blocks={currentPost} />
          <Spacing size={12} />
        </Suspense>
      </Section>
      <Spacing size={48} />
    </>
  )
}
