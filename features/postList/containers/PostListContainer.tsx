import { PostListFooter } from '../components/PostListFooter'
import { PostListHeader } from '../components/PostListHeader'
import { PostListView } from '../components/PostListView'

export function PostListContainer() {
  return (
    <>
      <PostListHeader />
      <PostListView />
      <PostListFooter />
    </>
  )
}
