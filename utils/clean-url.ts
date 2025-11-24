import { RichTextItemResponse } from '@notionhq/client'

export function cleanUrl(richText: RichTextItemResponse[]) {
  const text = richText[0].plain_text
  //특수문자 제거
  let result = text
  result = result.replace(/[^\w가-힣\s]/g, '')
  //공백 대체
  result = result.replace(/\s/g, '-')
  return result
}
