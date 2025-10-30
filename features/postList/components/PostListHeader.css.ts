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

export const title = style({
  fontSize: dp(4.25),
  display: 'flex',
  fontWeight: 400,
  alignItems: 'center',
  textAlign: 'center',
  fontFamily: '"Mona Sans", "Pretendard", sans-serif',
  lineHeight: 1.2,
})
