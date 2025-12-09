import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'
import { color } from 'styles/vars/color.css'
import { layouts } from 'styles/vars/layouts.css'

export const tagsFrame = style({
  display: 'flex',
  gap: dp(2),
  marginBlock: layouts.full,
})

export const tag = style({
  display: 'inline-block',
  fontSize: dp(3.5),
  fontFamily: '"Mona Sans", "Pretendard", monospace',
  fontWeight: 500,
  lineHeight: 1.2,
  backgroundColor: color.background_invert,
  paddingBlock: dp(1.5),
  paddingInline: dp(2),
  borderRadius: dp(1.2),
  color: color.text_invert,
})
