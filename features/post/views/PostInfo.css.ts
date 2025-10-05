import { style } from '@vanilla-extract/css'
import { dp } from 'styles/size'
import { color } from 'styles/vars/color.css'

export const postInfoFrame = style({
  marginBlock: dp(3),
})

export const postInfoText = style({
  fontSize: dp(3.75),
  fontFamily: '"IBM Plex Mono", "Pretendard", monospace',
  wordSpacing: '-0.3rem',
  fontWeight: 500,
  color: color.notion_gray,
})
