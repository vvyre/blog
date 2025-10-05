import { style } from '@vanilla-extract/css'
import { dp } from 'styles/size'
import { color } from 'styles/vars/color.css'

export const bookmarkFrame = style({
  backgroundColor: color.notion_background_gray,
  outline: `${dp(4)} solid ${color.notion_background_gray}`,
  borderRadius: dp(1),
  padding: dp(2),
  overflowX: 'auto',
  marginBlock: dp(8),
})
