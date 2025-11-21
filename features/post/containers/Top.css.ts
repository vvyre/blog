import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'
import { breakpoints } from 'styles/vars/breakpoints.css'
import { layouts } from 'styles/vars/layouts.css'

export const frame = style({
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingInline: layouts.paragraph,
  paddingTop: dp(12),
  marginBottom: dp(12),
  '@media': {
    [breakpoints.desktop]: {
      backgroundColor: 'transparent',
      paddingTop: dp(12),
    },
  },
})

export const iconFrame = style({
  marginBottom: '0.5rem',
})

export const icon = style({
  fontSize: '2.5rem',
})

export const subtitle = style({
  fontSize: dp(3.8),
})
