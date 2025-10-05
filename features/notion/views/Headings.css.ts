import { style } from '@vanilla-extract/css'
import { dp } from 'styles/size'

export const h1 = style({
  fontSize: dp(5.75),
  fontWeight: '700',
  margin: '1.5rem 0 0.5rem 0',
  lineHeight: 1.3,
  marginInline: dp(6),
})

export const h2 = style({
  fontSize: dp(5),
  fontWeight: '600',
  margin: '1.2rem 0 0.4rem 0',
  lineHeight: 1.3,
  marginInline: dp(6),
})

export const h3 = style({
  fontSize: dp(4),
  fontWeight: '600',
  margin: '1rem 0 0.33rem 0',
  lineHeight: 1.3,
  marginInline: dp(6),
})
