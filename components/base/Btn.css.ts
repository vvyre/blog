import { style } from '@vanilla-extract/css'
import { color } from 'styles/vars/color.css'

export const base = style({
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

export const cancel = style({
  backgroundColor: '#f6f6f6',
  color: color.text,
})

export const primary = style({
  backgroundColor: 'springgreen',
  color: color.text,
})
