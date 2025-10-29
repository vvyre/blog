import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'
import { color } from 'styles/vars/color.css'
import { layouts } from 'styles/vars/layouts.css'

export const quoteBase = style({
  marginInline: layouts.paragraph,
  paddingLeft: dp(3),
  lineHeight: 1.65,
  borderLeft: `${dp(1)} solid ${color.notion_gray}`,
})
