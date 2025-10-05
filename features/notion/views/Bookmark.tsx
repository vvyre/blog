import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { NotionComponentProps } from 'features/notion'
import { RichText } from './richText/RichText'
import * as css from './Bookmark.css'
import { Spacing } from 'components/base/Spacing'

export function Bookmark({ block }: NotionComponentProps<'bookmark'>) {
  const og = block.bookmarkInfo.open_graph
  const icon = block.bookmarkInfo.favicon
  const editedUrl = (url: string) => {
    const edited = url.replace(/^(http?:\/\/)?(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '')
    const idx = edited.indexOf('/')
    return idx === -1 ? edited : edited.slice(0, idx)
  }

  const editedTitle = (title: string) => {
    return title.length > 30 ? title.slice(0, 30) + '...' : title
  }

  return (
    <a
      className={css.bookmarkFrame}
      href={block.bookmark.url}
      target="_blank"
      aria-label={`Bookmark: ${block.bookmarkInfo.title ?? 'No title available'}`}>
      <div className={css.bookmarkInner}>
        <h4 className={css.bookmarkTitle}>
          {icon && (
            <span
              className={css.bookmarkIcon}
              style={{
                backgroundImage: `url('${icon}')`,
              }}
              aria-label="site favicon"
            />
          )}
          <span>{editedTitle(block.bookmarkInfo.title ?? '')}</span>
        </h4>
        <div>
          <span className={css.bookmarkUrl}>{editedUrl(block.bookmark.url)}</span>
        </div>

        {og?.description && (
          <>
            <Spacing size={3} />
            <p className={css.bookmarkDescription} aria-describedby="bookmark description">
              {og.description}
            </p>
          </>
        )}

        {block.bookmark.caption.map((txt: RichTextItemResponse, idx) => (
          <RichText key={idx} richText={txt} />
        ))}
      </div>
    </a>
  )
}
