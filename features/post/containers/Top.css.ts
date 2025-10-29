import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'
import { layouts } from 'styles/vars/layouts.css'

export const frame = style({
  margin: '0 auto',
  paddingInline: layouts.paragraph,
  paddingTop: dp(12),
  maxWidth: '45rem',
  '@media': {
    'screen and (min-width: 600px)': {
      backgroundColor: 'transparent',
      paddingTop: dp(24),
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
