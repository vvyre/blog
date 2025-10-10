import type { NotionComponentProps } from 'features/notion'

export function ColumnList({ block }: NotionComponentProps<'column_list'>) {
  //다른 column의 parent 블록으로, 레이아웃 기능만 하며 다른 정보는 포함되어 있지 않음. Column 컴포넌트를 받아 알아서 append해야 함
  return <></>
}
