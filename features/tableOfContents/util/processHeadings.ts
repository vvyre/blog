import type { TraversableBlock } from 'features/notion'
import { getHeadingLevel } from './getHeadingLevel'

export type TableOfContentBlock = TraversableBlock & { childrenHeadings: TableOfContentBlock[] }
export const processHeadings = (blocks: TraversableBlock[]) => {
  const headings = blocks.filter(b => b.type === 'heading_1' || b.type === 'heading_2' || b.type === 'heading_3')
  const root: TableOfContentBlock[] = []
  const stack: TableOfContentBlock[] = []

  headings.forEach(h => {
    const node: TableOfContentBlock = { ...h, childrenHeadings: [] }
    //자기보다 같거나 낮은 레벨의 부모를 찾음
    while (stack.length > 0 && getHeadingLevel(stack[stack.length - 1]) >= getHeadingLevel(node)) stack.pop()

    //stack의 top이 부모면 (낮은 레벨이면) 부모의 children에 나를, 아니면 최상단에 나를 추가
    if (stack.length > 0) stack[stack.length - 1].childrenHeadings.push(node)
    else root.push(node)

    //나를 스택에 추가
    stack.push(node)
  })

  return root
}
