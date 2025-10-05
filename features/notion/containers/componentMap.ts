import { BreadCrumb } from '../views/Breadcrumb'
import * as Headings from '../views/Headings'
import { Paragraph } from '../views/Paragraph'
import { BulletedListItem } from '../views/BulletedListItem'
import { Callout } from '../views/Callout'
import { ChildDatabase } from '../views/ChildDatabase'
import { ChildPage } from '../views/ChildPage'
import { Column } from '../views/Column'
import { ColumnList } from '../views/ColumnList'
import { NumberedListItem } from '../views/NumberedListItem'
import { BulletedListWrapper } from '../views/BulletedListWrapper'
import { NumberedListWrapper } from '../views/NumberedListWrapper'
import { Code } from '../views/Code'
import { NotionImg } from '../views/NotionImg'
import { NotionFile } from '../views/NotionFile'
import { Quote } from '../views/Quote'
import { Bookmark } from '../views/Bookmark'
import { Toggle } from '../views/Toggle'
import { NotionDivider } from '../views/NotionDivider'
import { ExtendedBlockTypes, NotionBlockComponent } from 'features/notion'

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
