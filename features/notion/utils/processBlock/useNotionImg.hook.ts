import { ExtendedImageBlockObjectResponse } from 'features/notion'
import { getImgUrl } from 'features/notion/utils/getImgUrl.util'
import { useEffect, useState } from 'react'

export const useNotionImg = (block: ExtendedImageBlockObjectResponse) => {
  const [imgUrl, setImgUrl] = useState<string>(getImgUrl(block))
  const [imgError, setImgError] = useState<boolean>(false)
  const [isReloading, setIsReloading] = useState<boolean>(false)
  const [fetchError, setFetchError] = useState<any>(null)

  async function reload() {
    setImgError(true)
  }

  useEffect(() => {
    ;(async () => {
      if (imgError) {
        try {
          setIsReloading(true)
          const response = await fetch(`/api/reload-img`, {
            body: JSON.stringify({ id: block.id }),
            method: 'POST',
          })
          const reloadedImg = await response.json()
          setImgUrl(getImgUrl(reloadedImg))
        } catch (err) {
          console.warn('notion-img-client-err', err)
          setFetchError(err)
        } finally {
          setIsReloading(false)
        }
      }
    })()
  }, [imgError])

  return { imgUrl, isReloading, reload, imgError, fetchError }
}
