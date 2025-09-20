import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'

interface CodeProps {
  richText?: RichTextItemResponse
}

export function Code({ richText, ...props }: CodeProps) {
  return <code {...props} />
}
