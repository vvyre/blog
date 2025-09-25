'use client'
import { default as Img } from 'next/image'
import { getPlainText } from 'features/notion/richTextToTxt'
import { useEffect, useState } from 'react'
import type { NotionComponentProps } from 'types/notion'
import { useModal } from '@frfla/react-hooks'
import { useNotionImg } from 'features/notion/processBlock/useNotionImg'

export function NotionImg({ block }: NotionComponentProps<'image'>) {
  const { imgUrl, reload, isReloading } = useNotionImg(block)
  const [[width, height], setImgSize] = useState<[number, number]>([400, 300])
  const [zoomed, setZoomed] = useState<boolean>(false)
  const { open, close } = useModal()

  useEffect(() => {
    const img = new Image()
    img.src = imgUrl
    img.onload = () => {
      if (img.height >= 400) setImgSize([img.width / 2, img.height / 2])
      else setImgSize([img.width, img.height])
    }
  }, [imgUrl])

  useEffect(() => {
    if (zoomed)
      open(
        <figure onClick={() => close()}>
          <Img
            unoptimized
            key={imgUrl}
            src={isReloading ? '' : imgUrl}
            alt={getPlainText(block?.image?.caption)}
            priority
            onError={() => reload()}
            onClick={() => setZoomed(!zoomed)}
            blurDataURL={block.blurDataURL}
            width={width}
            height={height}
          />
          {block.image.caption.length > 0 && <figcaption>{getPlainText(block.image.caption)}</figcaption>}
        </figure>
      )
  }, [zoomed, setZoomed])

  return (
    <figure onClick={() => setZoomed(true)}>
      <Img
        unoptimized
        key={imgUrl}
        src={isReloading ? '' : imgUrl}
        alt={getPlainText(block?.image?.caption)}
        priority
        onError={() => reload()}
        onClick={() => setZoomed(!zoomed)}
        blurDataURL={block.blurDataURL}
        width={width}
        height={height}
      />
      {block.image.caption.length > 0 && <figcaption>{getPlainText(block.image.caption)}</figcaption>}
    </figure>
  )
}
