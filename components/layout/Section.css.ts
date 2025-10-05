import { style } from '@vanilla-extract/css'

export const base = style({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '45rem',
  margin: '0 auto',
  '@media': {
    'screen and (min-width: 600px)': {},
  },
})
