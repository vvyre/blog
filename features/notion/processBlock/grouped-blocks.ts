import type { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

/**
 * list의 경우 따로 처리하지 않으면 li의 상위 태그 (ul, ol)를 렌더하기 난해하므로
 * 커스텀 블록을 만들어서 따로 처리함
 */
const process = (blocks: BlockObjectResponse[]) => {
  if (!blocks.length) return blocks

  const result: BlockObjectResponse[] = []

  const target: Partial<Record<BlockObjectResponse['type'], boolean>> = {
    bulleted_list_item: true,
    numbered_list_item: true,
  }

  let prevBlock: BlockObjectResponse['type'] = blocks[0].type

  const group: Partial<Record<keyof typeof target, BlockObjectResponse[]>> = {
    bulleted_list_item: [],
    numbered_list_item: [],
  }

  blocks.forEach((block, idx) => {
    const currBlock = block.type

    if (target[currBlock]) {
      group[currBlock]?.push(block)
      prevBlock = currBlock
    } else {
      if (target[prevBlock] && prevBlock !== currBlock) {
        //블록의 종류가 바뀌면 작업 진행 그룹을 삽입하고 초기화
        const key = `grouped_${prevBlock}`
        result.push({
          [key]: {
            children: group[prevBlock],
          },
          //@ts-expect-error 커스텀 타입 작성
          type: key,
          id: `${key}_${block.id}`,
          has_content: false,
        })

        group[prevBlock] = []
      }
      result.push(block)
      prevBlock = currBlock
    }

    if (idx === blocks.length - 1 && target[prevBlock] === true) {
      // 마지막 블록을 처리할 때 그룹을 블록 리스트에 따로 추가
      const key = `grouped_${prevBlock}`
      result.push({
        [key]: {
          children: group[prevBlock],
        },
        //@ts-expect-error 커스텀 타입 작성
        type: key,
        id: `${key}_${block.id}`,
        has_content: false,
      })
      group[prevBlock] = []
    }
  })
  return result
}

export const groupedBlocks = (blocks: BlockObjectResponse[]) => {
  const result = blocks.map(depth_block => {
    if (depth_block.has_children) {
      const type = depth_block.type
      ;(depth_block as any)[type].children = process((depth_block as any)[type].children)
      groupedBlocks((depth_block as any)[type].children)
    }
    return depth_block
  })

  return process(result)
}
