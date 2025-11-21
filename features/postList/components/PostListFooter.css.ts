import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'

export const frame = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: dp(4),
  gap: dp(4),
})
