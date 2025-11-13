'use client'
import { Spacing } from 'components/base/Spacing'
import type { NotionComponentProps } from 'features/notion'
import { useEffect, useState } from 'react'
import { getPlainText } from '../utils/getPlainText.util'
import * as css from './Bookmark.css'

export function Bookmark({ block }: NotionComponentProps<'bookmark'>) {
  const preview = block.bookmarkInfo.image ?? ''
  const [ratio, setRatio] = useState<number | null>(null)

  useEffect(() => {
    if (!preview) return
    const img = new Image()
    img.src = preview
    img.onload = () => {
      setRatio(img.width / img.height)
    }
  }, [preview])

  const editedUrl = (url: string) => {
    const edited = url.replace(/^(http?:\/\/)?(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '')
    const idx = edited.indexOf('/')
    return idx === -1 ? edited : edited.slice(0, idx)
  }
  const fallbackTitle = getPlainText(block.bookmark.caption)

  const editedTitle = (title: string) => {
    return title.length > 30 ? `${title.slice(0, 40)}...` : title
  }
  const editedDescription = (desc: string) => `${desc.slice(0, 80)}...`

  return (
    <a
      className={css.bookmarkFrame}
      href={block.bookmark.url}
      target="_blank"
      aria-label={`Bookmark: ${block.bookmarkInfo.title ?? fallbackTitle ?? 'No Title Available'}`}>
      <div className={css.bookmarkInner}>
        <h4 className={css.bookmarkTitle}>
          <span>{editedTitle(block.bookmarkInfo.title ?? fallbackTitle ?? '')}</span>
        </h4>

        <p className={css.bookmarkUrl}>{editedUrl(block.bookmark.url)}</p>

        {block.bookmarkInfo.description && (
          <>
            <Spacing size={3} />
            <p className={css.bookmarkDescription} aria-describedby="bookmark description">
              {editedDescription(block.bookmarkInfo.description)}
            </p>
          </>
        )}
      </div>
      <div
        className={css.bookmarkThumbnail}
        style={{
          backgroundImage: `url(${preview})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          ...(ratio && { aspectRatio: String(ratio) }),
        }}
      />
    </a>
  )
}
