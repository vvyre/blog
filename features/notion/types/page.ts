import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'

type PropertyTypes = PageObjectResponse['properties'][string]['type']
type Property<T extends PropertyTypes> = Extract<PageObjectResponse['properties'][string], { type: T }>

type PageProperties = {
  published: Property<'checkbox'>
  date: Property<'date'>
  slug: Property<'rich_text'>
  summary: Property<'rich_text'>
  tags: Property<'multi_select'>
  thumbnail: Property<'files'>
  title: Property<'title'>
}

export type NotionPageMeta = Omit<PageObjectResponse, 'properties'> & { properties: PageProperties }
