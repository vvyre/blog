import type {
  BlockObjectResponse,
  BookmarkBlockObjectResponse,
  BulletedListItemBlockObjectResponse,
  CalloutBlockObjectResponse,
  ImageBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
  ParagraphBlockObjectResponse,
  RichTextItemResponse,
} from '@notionhq/client'
import type { BookmarkMeta } from 'features/notion/utils/processBlock/processor/bookmark'

type BaseBlock = Omit<ParagraphBlockObjectResponse, 'type' | 'paragraph'>

export type GroupedBulletedListItemResponse = BaseBlock & {
  type: 'grouped_bulleted_list_item'
  grouped_bulleted_list_item: {
    children: BulletedListItemBlockObjectResponse[]
  }
}

export type GroupedNumberedListItemResponse = BaseBlock & {
  type: 'grouped_numbered_list_item'
  grouped_numbered_list_item: {
    children: NumberedListItemBlockObjectResponse[]
  }
}

export type ExtendedImageBlockObjectResponse = {
  blurDataURL?: string
} & ImageBlockObjectResponse

export type ExtendedCalloutBlockObjectResponse = CalloutBlockObjectResponse

export type ExtendedBookmarkObjectResponse = BookmarkBlockObjectResponse & {
  bookmarkInfo: BookmarkMeta
}

export type ExtendedTextResponse = RichTextItemResponse & BlockObjectResponse
