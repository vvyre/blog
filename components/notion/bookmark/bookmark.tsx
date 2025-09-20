import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { NotionComponentProps } from 'types/notion-transformed.types'
import { Text } from '../text/text'
import { Spacing } from 'components/base/spacing'

export function Bookmark({ block }: NotionComponentProps<'bookmark'>) {
  const og = block.bookmarkInfo.open_graph
  const icon = block.bookmarkInfo.favicon
  return (
    <a href={block.bookmark.url} target="_blank" aria-label={`Bookmark: ${block.bookmarkInfo.title ?? 'No title available'}`}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
        <h3>{block.bookmarkInfo.title}</h3>

        <Spacing size="0.4rem" />
        <div>
          {icon && (
            <div
              style={{
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
          <p>{block.bookmark.url}</p>
        </div>

        <Spacing size="0.4rem" />
        {og?.description && <p aria-describedby="bookmark description">{og.description}</p>}

        {block.bookmark.caption.map((txt: RichTextItemResponse, idx) => (
          <Text key={idx} richText={txt} />
        ))}
      </div>
    </a>
  )
}
