import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { NotionComponentProps } from 'features/notion'
import { RichText } from './richText/RichText'
import { Spacing } from 'components/base/Spacing'
import { bookmarkFrame } from './Bookmark.css'

export function Bookmark({ block }: NotionComponentProps<'bookmark'>) {
  const og = block.bookmarkInfo.open_graph
  const icon = block.bookmarkInfo.favicon
  return (
    <a
      className={bookmarkFrame}
      href={block.bookmark.url}
      target="_blank"
      aria-label={`Bookmark: ${block.bookmarkInfo.title ?? 'No title available'}`}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
        <h4>{block.bookmarkInfo.title}</h4>

        <Spacing size="0.8rem" />
        <div>
          {icon && (
            <span
              style={{
                display: 'inline-block',
                width: '0.85rem',
                height: '0.85rem',
                backgroundImage: `url('${icon}')`,
                backgroundSize: '0.85rem',
                backgroundRepeat: 'no-repeat',
                marginRight: '0.35rem',
              }}
              aria-label="site favicon"
            />
          )}
          <span>{block.bookmark.url}</span>
        </div>

        <Spacing size="0.4rem" />
        {og?.description && <p aria-describedby="bookmark description">{og.description}</p>}

        {block.bookmark.caption.map((txt: RichTextItemResponse, idx) => (
          <RichText key={idx} richText={txt} />
        ))}
      </div>
    </a>
  )
}
