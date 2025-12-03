import { BreadCrumb } from '../components/Breadcrumb'
import * as Headings from '../components/Headings'
import { Paragraph } from '../components/Paragraph'
import { BulletedListItem } from '../components/BulletedListItem'
import { Callout } from '../components/Callout'
import { ChildDatabase } from '../components/ChildDatabase'
import { ChildPage } from '../components/ChildPage'
import { Column } from '../components/Column'
import { ColumnList } from '../components/ColumnList'
import { NumberedListItem } from '../components/NumberedListItem'
import { BulletedListWrapper } from '../components/BulletedListWrapper'
import { NumberedListWrapper } from '../components/NumberedListWrapper'
import { Code } from '../components/Code'
import { NotionImg } from '../components/NotionImg'
import { NotionFile } from '../components/NotionFile'
import { Quote } from '../components/Quote'
import { Bookmark } from '../components/Bookmark'
import { Toggle } from '../components/Toggle'
import { NotionDivider } from '../components/NotionDivider'
import type { ExtendedBlockTypes, NotionBlockComponent } from 'features/notion'
import { Equation } from '../components/Equation'

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
  equation: Equation,
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
