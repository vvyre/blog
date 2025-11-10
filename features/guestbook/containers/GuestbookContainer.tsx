import { Guestbook } from 'features/guestbook/components/Guestbook'
import { GuestbookHeader } from 'features/guestbook/components/GuestbookHeader'
import * as css from './GuestbookContainer.css'

export function GuestbookContainer() {
  return (
    <div className={css.guestbookContainerFrame}>
      <GuestbookHeader />
      <Guestbook />
    </div>
  )
}
