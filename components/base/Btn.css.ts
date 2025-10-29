import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'
import { color } from 'styles/vars/color.css'

export const base = style({
  border: '1px solid transparent',
  borderRadius: dp(1.2),
  cursor: 'pointer',
  fontSize: dp(4),
  height: dp(12.6),
  lineHeight: 1,
  paddingInline: dp(3.2),
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
