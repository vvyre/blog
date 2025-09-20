import { APIErrorCode, isNotionClientError } from '@notionhq/client'

export const handleNotionError = <T extends (...args: any[]) => Promise<any>>(
  fn: T
): T => {
  return <T>(async (...args: any[]) => {
    try {
      return await fn(...args)
    } catch (error) {
      if (isNotionClientError(error)) {
        switch (error.code) {
          case APIErrorCode.RateLimited: {
            // const timer = Number(error.headers.get('Retry-After'));
          }
        }
      }
    }
  })
}
