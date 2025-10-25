import { Client } from '@notionhq/client'
import type {
  BlockObjectResponse,
  DatabaseObjectResponse,
  GetBlockResponse,
  PartialBlockObjectResponse,
  QueryDataSourceParameters,
} from '@notionhq/client/build/src/api-endpoints'
import { ENV } from 'static/env'
import type { NotionPageMeta } from '../types/meta'

const createNotionClient = () => new Client({ auth: ENV.NOTION_KEY })
export const notion: Client = createNotionClient()

const POST_LIST_CACHE: Record<string, Promise<NotionPageMeta[]>> = {
  id: new Promise(() => []),
}

const GET_DATASRC_ID = async (database_id: string): Promise<{ id: string; name: string }[]> => {
  const result = (await notion.databases.retrieve({ database_id })) as DatabaseObjectResponse
  return result.data_sources
}

export const getPostList = async (database_id: string): Promise<NotionPageMeta[]> => {
  const [dataSrc] = await GET_DATASRC_ID(database_id ?? ENV.NOTION_DATABASE_ID)
  const { id: data_source_id } = dataSrc

  const query: QueryDataSourceParameters = {
    data_source_id,
    sorts: [
      {
        property: 'date',
        direction: 'descending',
      },
    ],
    filter: {
      and: [
        {
          property: 'published',
          checkbox: {
            equals: true,
          },
        },
      ],
    },
  }
  try {
    const response = await notion.dataSources.query(query)
    return response.results as NotionPageMeta[]
  } catch (err) {
    console.error('\n', data_source_id, err, '\n', 'xxxx POSTLIST FETCH ERROR')
    return []
  }
}

export const getCachedPostList = async (database_id: string) => {
  if (!POST_LIST_CACHE[database_id]) {
    POST_LIST_CACHE[database_id] = getPostList(database_id)
  } else console.warn(`**${database_id.slice(0, 4)}`, 'vvvv CACHED POSTLIST')

  return POST_LIST_CACHE[database_id]
}

export const getPostMetaData = async (page_id: string): Promise<NotionPageMeta> => {
  const result = await notion.pages.retrieve({ page_id })

  return result as NotionPageMeta
}

const getChildrenBlocks = async (parent_block_id: string): Promise<(BlockObjectResponse | PartialBlockObjectResponse)[]> => {
  console.warn(`**${parent_block_id.slice(0, 4)}`, '>>>> CHILDREN BLOCK FETCH')
  let results = []
  let blocks = await notion.blocks.children.list({
    block_id: parent_block_id,
    page_size: 100,
  })
  results = [...blocks.results]
  while (blocks.has_more) {
    parent_block_id = blocks.next_cursor ?? ''
    blocks = await notion.blocks.children.list({
      block_id: parent_block_id,
      page_size: 100,
    })
    results = [...results, ...blocks.results]
  }
  return results
}

const getAllChildrenBlocks = async (blocks: BlockObjectResponse[]) => {
  const result = await Promise.all(
    blocks.map(async depth_block => {
      if (depth_block.has_children) {
        const children = await getChildrenBlocks(depth_block.id)
        const type = depth_block.type
        ;(depth_block as any)[type].children = children
      }
      return depth_block
    })
  )
  return result
}

export const getPost = async (block_id: string): Promise<BlockObjectResponse[]> => {
  const blocks = await getChildrenBlocks(block_id)
  return await getAllChildrenBlocks(blocks as BlockObjectResponse[])
}

export const getSingleBlock = async (block_id: string): Promise<GetBlockResponse> => {
  console.warn(`************${block_id.slice(0, 4)}`, '>>>> SINGLE BLOCK FETCH')
  return await notion.blocks.retrieve({ block_id })
}
