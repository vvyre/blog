import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'
import { layouts } from 'styles/vars/layouts.css'

export const guestBookFrame = style({
  paddingInline: layouts.full,
  paddingTop: dp(6),
  maxWidth: '45rem',
  margin: '0 auto',
})
