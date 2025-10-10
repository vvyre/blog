import type { NotionComponentProps } from 'features/notion'

export function ChildPage({ block }: NotionComponentProps<'child_page'>) {
  //페이지 링크 블록을 제공하지는 않습니다. 이름으로 페이지를 쿼리해 따로 구현해야 합니다.
  return <></>
}
