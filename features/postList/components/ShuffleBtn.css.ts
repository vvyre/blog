import { keyframes, style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'

export const shuffleBtn = style({
  display: 'inline-block',
  cursor: 'pointer',
  lineHeight: 1,
  margin: 0,
  marginLeft: dp(2),
  padding: 0,
  border: 'none',
  backgroundColor: 'transparent',
  transition: 'transform 0.15s ease-in-out',
})

const spin = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
})

export const rotate = style({
  animation: `${spin} 0.35s ease-in-out`,
})
