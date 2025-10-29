import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { Wrapper } from 'components/utility/Wrapper'
import type { ReactNode } from 'react'
import { Code } from './RTInlineCode'
import { Italic } from './RTItalic'
import { Strike } from './RTStrike'
import { Strong } from './RTStrong'
import { Underline } from './RTUnderline'

interface AnnotationsProps {
  bold?: boolean
  code?: boolean
  italic?: boolean
  strike?: boolean
  underline?: boolean
  richText?: RichTextItemResponse
  children?: ReactNode
}
export function Annotations({ bold = false, code = false, italic = false, strike = false, underline = false, richText, children }: AnnotationsProps) {
  return (
    <Wrapper condition={richText ? richText.annotations.strikethrough : strike} as={() => <Strike />}>
      <Wrapper condition={richText ? richText.annotations.bold : bold} as={() => <Strong />}>
        <Wrapper condition={richText ? richText.annotations.italic : italic} as={() => <Italic />}>
          <Wrapper condition={richText ? richText.annotations.underline : underline} as={() => <Underline />}>
            <Wrapper condition={richText ? richText.annotations.code : code} as={() => <Code richText={richText} />}>
              {children}
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}
