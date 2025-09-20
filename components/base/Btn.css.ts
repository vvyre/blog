import { style } from '@vanilla-extract/css'

export const BASE = style({
  border: '1px solid transparent',
  borderRadius: '0.3rem',
  cursor: 'pointer',
  fontSize: '1rem',
  height: '3.15rem',
  lineHeight: 1,
  paddingInline: '0.8rem',
  transition: 'scale ease 0.1s',
  width: '100%',
  ':disabled': {
    backgroundColor: 'gainsboro',
    cursor: 'not-allowed',
  },
  ':active': {
    transform: 'scale(0.99, 0.95)',
  },
})

export const CANCEL = style({
  backgroundColor: '#f6f6f6',
  color: 'black',
})

export const PRIMARY = style({
  backgroundColor: 'springgreen',
  color: 'black',
})
