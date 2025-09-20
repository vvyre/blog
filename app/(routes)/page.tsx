import { Section } from 'components/layout/Section'
import { Top } from 'components/layout/Top'
import meta from 'assets/meta'
import { PostListSection } from 'sections/startPage/PostListSection'

export default async function Home() {
  return (
    <>
      <Top title={meta.title} />
      <Section>
        <PostListSection />
      </Section>
    </>
  )
}
