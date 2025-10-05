import { style } from '@vanilla-extract/css'
import { dp } from 'styles/size'

export const h1 = style({
  fontSize: dp(6.5),
  fontWeight: '600',
  margin: '1.5rem 0 0.5rem 0',
  lineHeight: 1.3,
})

export const h2 = style({
  fontSize: dp(5),
  fontWeight: '500',
  margin: '1.2rem 0 0.4rem 0',
  lineHeight: 1.3,
})

export const h3 = style({
  fontSize: dp(4.5),
  fontWeight: '500',
  margin: '1rem 0 0.33rem 0',
  lineHeight: 1.3,
})
