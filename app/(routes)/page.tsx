import { Section } from 'components/layout/Section'
import { Top } from 'features/post/containers/Top'
import meta from 'assets/meta'
import { PostListContainer } from 'features/postList'

export default async function Home() {
  return (
    <>
      <Section>
        <PostListContainer />
      </Section>
    </>
  )
}
