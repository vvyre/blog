import { style } from '@vanilla-extract/css'
import { breakpoints } from 'styles/vars/breakpoints.css'

export const base = style({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '45rem',
  margin: '0 auto',
  '@media': {
    [breakpoints.desktop]: {},
  },
})
