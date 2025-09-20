import { Strong } from './strong'
import { Italic } from './italic'
import { Strike } from './strike'
import { Underline } from './underline'
import { Code } from './code'
import { ReactNode } from 'react'
import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { Wrapper } from '../../util/wrapper'
import { vars } from 'styles/themes.css'

interface AnnotationsProps {
  bold?: boolean
  code?: boolean
  italic?: boolean
  strike?: boolean
  underline?: boolean
  color?: keyof typeof vars.notion
  richText?: RichTextItemResponse
  children?: ReactNode
}
export function Annotations({
  bold = false,
  code = false,
  italic = false,
  strike = false,
  underline = false,
  richText,
  children,
}: AnnotationsProps) {
  return (
    <Wrapper
      condition={richText ? richText.annotations.bold : bold}
      as={() => <Strong />}
    >
      <Wrapper
        condition={richText ? richText.annotations.italic : italic}
        as={() => <Italic />}
      >
        <Wrapper
          condition={richText ? richText.annotations.strikethrough : strike}
          as={() => <Strike />}
        >
          <Wrapper
            condition={richText ? richText.annotations.underline : underline}
            as={() => <Underline />}
          >
            <Wrapper
              condition={richText ? richText.annotations.code : code}
              as={() => <Code richText={richText} />}
            >
              <>
                {richText && richText.plain_text}
                {children}
              </>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}
