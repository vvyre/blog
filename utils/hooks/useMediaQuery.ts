import { useSyncExternalStore } from 'react'

function subscribe(query: string, listener: () => void) {
  const MediaQuery = window.matchMedia(query)
  MediaQuery.addEventListener('change', listener)
  return () => MediaQuery.removeEventListener('change', listener)
}

function getSnapshot(query: string) {
  return window.matchMedia(query).matches
}

export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    cb => subscribe(query, cb),
    () => getSnapshot(query),
    () => false
  )
}
