import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'

export const aboutFrame = style({
  paddingTop: dp(24),
  height: '100%',
  backgroundColor: 'transparent',
  width: 'clamp(20rem, 100%, 45rem)',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
})
