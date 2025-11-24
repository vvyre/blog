import type { TraversableBlock } from 'features/notion'
import type { TableOfContentBlock } from './processHeadings'

export const getHeadingLevel = (block: TraversableBlock | TableOfContentBlock) => {
  switch (block.type) {
    case 'heading_1':
      return 1
    case 'heading_2':
      return 2
    case 'heading_3':
      return 3
    default:
      return 1
  }
}
