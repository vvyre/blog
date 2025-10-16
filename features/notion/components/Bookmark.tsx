import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { Spacing } from 'components/base/Spacing'
import type { NotionComponentProps } from 'features/notion'
import * as css from './Bookmark.css'
import { RichText } from './richText/RichText'

export function Bookmark({ block }: NotionComponentProps<'bookmark'>) {
  const icon = block.bookmarkInfo.image ?? ''
  const editedUrl = (url: string) => {
    const edited = url.replace(/^(http?:\/\/)?(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '')
    const idx = edited.indexOf('/')
    return idx === -1 ? edited : edited.slice(0, idx)
  }

  const editedTitle = (title: string) => {
    return title.length > 30 ? `${title.slice(0, 30)}...` : title
  }

  return (
    <a
      className={css.bookmarkFrame}
      href={block.bookmark.url}
      target="_blank"
      aria-label={`Bookmark: ${block.bookmarkInfo.title ?? 'No title available'}`}
    >
      <div className={css.bookmarkInner}>
        <h4 className={css.bookmarkTitle}>
          {icon && (
            <span
              className={css.bookmarkIcon}
              style={{
                backgroundImage: `url('${icon}')`,
              }}
            />
          )}
          <span>{editedTitle(block.bookmarkInfo.title ?? '')}</span>
        </h4>
        <div>
          <span className={css.bookmarkUrl}>{editedUrl(block.bookmark.url)}</span>
        </div>

        {block.bookmarkInfo.description && (
          <>
            <Spacing size={3} />
            <p className={css.bookmarkDescription} aria-describedby="bookmark description">
              {block.bookmarkInfo.description}
            </p>
          </>
        )}

        {block.bookmark.caption.map((txt: RichTextItemResponse, idx) => (
          <RichText key={`${txt.type}${idx}`} richText={txt} />
        ))}
      </div>
    </a>
  )
}
