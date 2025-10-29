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
  fontSize: dp(4),
  textAlign: 'center',
  fontFamily: '"IBM Plex Mono", "Pretendard", monospace',
  wordSpacing: dp(-1.4),
  lineHeight: 1,
})
