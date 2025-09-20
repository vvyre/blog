import { BreadCrumb } from './breadcrumb/breadcrumb'
import { Heading_1 } from './headings/heading_1'
import { Heading_2 } from './headings/heading_2'
import { Heading_3 } from './headings/heading_3'
import { Paragraph } from './paragraph/paragraph'
import { BulletedListItem } from './bulleted-list-item/bulleted-list-item'
import { Callout } from './callout/callout'
import { ChildDatabase } from './child-database/child-database'
import { ChildPage } from './child-page/child-page'
import { Column } from './column/column'
import { ColumnList } from './column-list/column-list'
import { NumberedListItem } from './numbered-list-item/numbered-list-item'
import { BulletedListWrapper } from './bulleted-list-item/bulleted-list-wrapper'
import { NumberedListWrapper } from './numbered-list-item/numbered-list-wrapper'
import { Code } from './code/code'
import { NotionImg } from './image/notion-img'
import { NotionFile } from './file/notion-file'
import { Quote } from './quote/quote'
import { Bookmark } from './bookmark/bookmark'
import { Toggle } from './toggle/toggle'
import { NotionDivider } from './divider/notion-divider'
import type { ExtendedBlockTypes, NotionBlockComponent } from 'types/notion.types'

export const blockComponentMap: Partial<{ [K in ExtendedBlockTypes]: NotionBlockComponent<K> }> = {
  bookmark: Bookmark,
  breadcrumb: BreadCrumb,
  bulleted_list_item: BulletedListItem,
  grouped_bulleted_list_item: BulletedListWrapper,
  callout: Callout,
  child_database: ChildDatabase,
  child_page: ChildPage,
  code: Code,
  column: Column,
  column_list: ColumnList,
  divider: NotionDivider,
  embed: NotionFile,
  // equation: <></>,
  file: NotionFile,
  heading_1: Heading_1,
  heading_2: Heading_2,
  heading_3: Heading_3,
  image: NotionImg,
  // link_preview: <></>,
  // link_to_page: <></>,
  numbered_list_item: NumberedListItem,
  grouped_numbered_list_item: NumberedListWrapper,
  paragraph: Paragraph,
  // pdf: <></>,
  quote: Quote,
  // synced_block: <></>,
  // table: <></>,
  // table_of_contents: <></>,
  // table_row: <></>,
  // template: <></>,
  // to_do: <></>,
  toggle: Toggle,
  // unsupported: <></>,
  // video: <></>,
}
