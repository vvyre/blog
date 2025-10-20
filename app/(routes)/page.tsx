import { Spacing } from 'components/base/Spacing'
import { PostListContainer } from 'features/postList'

export default async function Home() {
  return (
    <>
      <Spacing size={24} />
      <PostListContainer />
    </>
  )
}
