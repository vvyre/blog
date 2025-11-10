import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'
import { color } from 'styles/vars/color.css'

export const guestbookHeaderFrame = style({
  paddingTop: dp(12),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})
export const guestbookHeaderTitle = style({
  color: color.text,
  textAlign: 'center',
  fontFamily: '"Mona Sans", sans-serif',
})
