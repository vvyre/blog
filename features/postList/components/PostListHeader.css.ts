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
  fontSize: 'clamp(0.5rem, 2.66vw, 1rem)',
  display: 'flex',
  fontWeight: 400,
  wordSpacing: `-${dp(1)}`,
  alignItems: 'center',
  textAlign: 'center',
  fontFamily: '"Google Sans Code", "Pretendard", monospace',
  lineHeight: 1.2,
})
