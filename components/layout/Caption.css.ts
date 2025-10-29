import { style } from '@vanilla-extract/css'
import { dp } from 'styles/size'
import { color } from 'styles/vars/color.css'

export const base = style({
  fontSize: dp(3.5),
  fontWeight: 500,
  lineHeight: 1.3,
  color: color.notion_gray,
})
