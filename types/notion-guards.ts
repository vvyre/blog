import type { WithChildren } from 'types/notion-transformed.types'
import { ExtendedBlockObjectResponse } from './notion.types'

export function hasChildren<T extends ExtendedBlockObjectResponse>(block: T): block is WithChildren<T> & { has_children: true } {
  return block.has_children === true
}
