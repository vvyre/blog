import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'
import { layouts } from 'styles/vars/layouts.css'

export const h1 = style({
  fontSize: dp(5.75),
  fontWeight: '700',
  margin: '1.5rem 0 0.5rem 0',
  lineHeight: 1.3,
  marginInline: layouts.paragraph,
})

export const h2 = style({
  fontSize: dp(5),
  fontWeight: '600',
  margin: '1.2rem 0 0.4rem 0',
  lineHeight: 1.3,
  marginInline: layouts.paragraph,
})

export const h3 = style({
  fontSize: dp(4),
  fontWeight: '600',
  marginBlockStart: dp(4),
  marginBlockEnd: dp(1.32),
  lineHeight: 1.3,
  marginInline: layouts.paragraph,
})
