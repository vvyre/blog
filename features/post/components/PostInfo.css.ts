import { style } from '@vanilla-extract/css'
import { dp } from 'styles/size'
import { color } from 'styles/vars/color.css'
import { layouts } from 'styles/vars/layouts.css'

export const postInfoFrame = style({
  marginBlock: layouts.full,
})

export const postInfoText = style({
  fontSize: dp(3.75),
  fontFamily: '"Mona Sans", "Pretendard", monospace',
  fontWeight: 500,
  color: color.notion_gray,
})
