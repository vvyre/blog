import { BreadCrumb } from '../Breadcrumb'
import * as Headings from '../Headings'
import { Paragraph } from '../Paragraph'
import { BulletedListItem } from '../BulletedListItem'
import { Callout } from '../Callout'
import { ChildDatabase } from '../ChildDatabase'
import { ChildPage } from '../ChildPage'
import { Column } from '../Column'
import { ColumnList } from '../ColumnList'
import { NumberedListItem } from '../NumberedListItem'
import { BulletedListWrapper } from '../BulletedListWrapper'
import { NumberedListWrapper } from '../NumberedListWrapper'
import { Code } from '../Code'
import { NotionImg } from '../NotionImg'
import { NotionFile } from '../NotionFile'
import { Quote } from '../Quote'
import { Bookmark } from '../Bookmark'
import { Toggle } from '../Toggle'
import { NotionDivider } from '../NotionDivider'
import { ExtendedBlockTypes, NotionBlockComponent } from 'types/notion'

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
  // embed: NotionFile,
  // equation: <></>,
  file: NotionFile,
  heading_1: Headings.Heading_1,
  heading_2: Headings.Heading_2,
  heading_3: Headings.Heading_3,
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
