import {
  BlockObjectResponse,
  BookmarkBlockObjectResponse,
  CalloutBlockObjectResponse,
  ImageBlockObjectResponse,
  RichTextItemResponse,
} from '@notionhq/client'
import { BookmarkMeta } from 'features/notion/get-bookmark-metadata'
import {
  ExtendedBlockObjectResponse,
  ExtendedBlockTypes,
  GroupedBulletedListItemResponse,
  GroupedNumberedListItemResponse,
  NotionBlock,
} from './notion.types'
import { ComponentType } from 'react'

export interface Image_File {
  caption: RichTextItemResponse[]
  type: 'file' | 'external'
  file?: {
    url: string
    expiry_time: string
  }
}
export interface Image_External {
  caption: RichTextItemResponse[]
  type: 'file' | 'external'
  external?: {
    url: string
    expiry_time: string
  }
}
export type ExtendedImageBlockObjectResponse = {
  blurDataURL?: string
} & ImageBlockObjectResponse

export type ExtendedCalloutBlockObjectResponse = CalloutBlockObjectResponse

export type ExtendedTextResponse = RichTextItemResponse & BlockObjectResponse

export type ExtendedBookmarkObjectResponse = BookmarkBlockObjectResponse & {
  bookmarkInfo: BookmarkMeta
}

export type WithChildren<T extends ExtendedBlockObjectResponse> = T & {
  has_children: true
} & {
  [K in keyof T]: K extends T['type'] ? T[K] & { children: TraversableBlock[] } : T[K]
}

export type TraversableBlock = WithChildren<BlockObjectResponse>

type ExcludedNotionBlocks = Exclude<ExtendedBlockObjectResponse, { type: 'bookmark' } | { type: 'image' } | { type: 'callout' }>

export type TransformedNotionBlocks =
  | ExcludedNotionBlocks
  | ExtendedBookmarkObjectResponse
  | ExtendedCalloutBlockObjectResponse
  | ExtendedImageBlockObjectResponse
  | GroupedBulletedListItemResponse
  | GroupedNumberedListItemResponse
  | WithChildren<NotionBlock<'numbered_list_item'>>
  | WithChildren<NotionBlock<'grouped_numbered_list_item'>>
  | WithChildren<NotionBlock<'grouped_bulleted_list_item'>>
  | WithChildren<NotionBlock<'bulleted_list_item'>>
  | WithChildren<NotionBlock<'paragraph'>>
  | WithChildren<NotionBlock<'table'>>
  | WithChildren<NotionBlock<'table_of_contents'>>
  | WithChildren<NotionBlock<'quote'>>
  | WithChildren<NotionBlock<'toggle'>>

export type TransformedNotionBlock<T extends ExtendedBlockTypes> = Extract<TransformedNotionBlocks, { type: T }>
export type NotionBlockComponent<T extends ExtendedBlockTypes> = ComponentType<{ block: TransformedNotionBlock<T> }>
export type NotionComponentProps<T extends ExtendedBlockTypes> = {
  block: TransformedNotionBlock<T>
}
