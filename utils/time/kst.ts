import { DateTime } from 'luxon'

export const KST = () => {
  const now = DateTime.now()
  now.setZone('Asia/Seoul')

  return now
}
