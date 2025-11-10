import { About } from 'features/about'
import { GuestbookContainer } from 'features/guestbook'

export default async function AboutPage() {
  return (
    <>
      <About />
      <GuestbookContainer />
    </>
  )
}
