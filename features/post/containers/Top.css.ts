import { style } from '@vanilla-extract/css'
import { dp } from 'styles/size'
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
    'screen and (min-width: 600px)': {
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
  fontSize: '0.95rem',
})
