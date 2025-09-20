import { style } from '@vanilla-extract/css'

export const BASE = style({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '42rem',
  margin: '0 auto',
  paddingInline: '1rem',
  '@media': {
    'screen and (min-width: 600px)': {},
  },
})
