import Link from 'next/link'
import { Annotations } from 'components/notion/annotations/annotations'
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { ComponentProps, memo, type ElementType } from 'react'
import { color } from 'styles/vars/color.css'

export type TextVariants = {
  bold?: boolean
  code?: boolean
  italic?: boolean
  strike?: boolean
  underline?: boolean
  color?: keyof typeof color
  richText?: RichTextItemResponse
  size?: number
  className?: string
}
type TextProps<T extends ElementType> = {
  as?: T | 'Link'
} & TextVariants &
  Omit<ComponentProps<T>, keyof TextVariants>

function T<T extends ElementType>({
  as,
  bold,
  code,
  italic,
  strike,
  underline,
  color = 'notion_default',
  richText,
  size = 4,
  ...props
}: TextProps<T>) {
  const COLOR = richText ? richText.annotations.color : color
  const classNames = [props.className]
  let cn = classNames.join(' ')

  let Component = as ?? 'span'

  if (richText?.href) Component = 'a'
  if (Component === 'a' || richText?.href) cn = ''

  switch (Component) {
    default:
      return (
        <Component className={cn} {...props}>
          <Annotations richText={richText} bold={bold} code={code} italic={italic} strike={strike} underline={underline}>
            {props.children}
          </Annotations>
        </Component>
      )
    case 'a':
      return (
        <a className={cn} href={richText?.href ?? props.href} target={props.target ?? '_blank'} rel="noopener noreferrer" {...props}>
          <Annotations richText={richText} bold={bold} code={code} italic={italic} strike={strike} underline={underline}>
            {props.children}
          </Annotations>
        </a>
      )
    case 'Link':
      return (
        <Link href={richText?.href ?? props.href} className={cn} {...props} scroll={props.scroll ?? true}>
          <Annotations richText={richText} bold={bold} code={code} italic={italic} strike={strike} underline={underline}>
            {props.children}
          </Annotations>
        </Link>
      )
  }
}

export const Text = memo(T)
Text.displayName = 'Text'
