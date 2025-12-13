import { Spacing } from 'components/base/Spacing'
import type { NotionComponentProps } from 'features/notion'
import { getPlainText } from '../richText/getPlainText'
import * as css from './Bookmark.css'

export function Bookmark({ block }: NotionComponentProps<'bookmark'>) {
  const preview = block.bookmarkInfo.image ?? ''

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
      aria-label={`Bookmark: ${block.bookmarkInfo.title ?? fallbackTitle ?? 'No Title Available'}`}
      style={{
        backgroundImage: `url(${preview})`,
      }}
    >
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
    </a>
  )
}
