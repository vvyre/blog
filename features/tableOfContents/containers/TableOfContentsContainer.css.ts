import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'

import { layouts } from 'styles/vars/layouts.css'

export const frame = style({
  width: '100%',
  maxWidth: '45rem',
  margin: '0 auto',
  paddingInline: layouts.paragraph,
})

export const title = style({
  fontSize: dp(5.75),
  fontWeight: 600,
  fontFamily: '"Mona Sans", "Pretendard", sans-serif',
  marginBottom: dp(6),
})

export const tocFrame = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})
