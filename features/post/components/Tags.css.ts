import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'
import { color } from 'styles/vars/color.css'
import { layouts } from 'styles/vars/layouts.css'

export const tagsFrame = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: layouts.full,
  marginBlock: layouts.full,
})

export const tag = style({
  display: 'inline-block',
  fontSize: dp(3.75),
  fontFamily: '"IBM Plex Mono", "Pretendard", monospace',
  wordSpacing: dp(-1.2),
  fontWeight: 500,
  textTransform: 'uppercase',
  color: color.notion_gray,
})
