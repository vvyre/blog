import { Section } from 'components/layout/Section'
import { PostListContainer } from 'features/postList'
import { Spacing } from 'components/base/Spacing'

export default async function Home() {
  return (
    <>
      <Spacing size={24} />
      <PostListContainer />
    </>
  )
}
