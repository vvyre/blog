import { Divider } from 'components/base/Divider'
import { Section } from 'components/layout/Section'
import { Top } from 'components/layout/Top'
import { Metadata } from 'next'
import { ENV } from 'static/env'
import { pageMeta } from 'features/notion/pageMeta'
import { processBlock } from 'features/notion/processBlock'
import { getCachedPostList, getPost } from 'features/notion/fetch'
import RenderNotion from 'components/notion/_render/_RenderNotion'

export interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

export const dynamicParams = false
export const revalidate = 3600

export async function generateStaticParams() {
  const posts = await getCachedPostList(ENV.NOTION_DATABASE_ID)

  return posts.map(post => {
    return {
      year: String(pageMeta(post).date.year()),
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
  const blocks = await processBlock(await getPost(matchPost.id))

  return (
    <>
      <Top title={`${meta.title}`} />
      <Divider size={1} />
      <Section>
        <RenderNotion blocks={blocks} />
      </Section>
    </>
  )
}
