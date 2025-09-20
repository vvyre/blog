import type {
  BlockObjectResponse,
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
  PageObjectResponse,
  ParagraphBlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints'

type PropertyTypes = PageObjectResponse['properties'][string]['type']
type Property<T extends PropertyTypes> = Extract<PageObjectResponse['properties'][string], { type: T }>

type BlogProps = {
  published: Property<'checkbox'>
  date: Property<'date'>
  slug: Property<'rich_text'>
  summary: Property<'rich_text'>
  tags: Property<'multi_select'>
  thumbnail: Property<'files'>
  title: Property<'title'>
}

export type NotionPageMeta = Omit<PageObjectResponse, 'properties'> & { properties: BlogProps }

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

export type ExtendedBlockObjectResponse = BlockObjectResponse | GroupedBulletedListItemResponse | GroupedNumberedListItemResponse
export type ExtendedBlockTypes = ExtendedBlockObjectResponse['type']
export type NotionBlock<T extends ExtendedBlockTypes> = Extract<ExtendedBlockObjectResponse, { type: T }>
