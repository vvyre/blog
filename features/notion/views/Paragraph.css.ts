import { style } from '@vanilla-extract/css'
import { dp } from 'styles/size'

export const paragraph = style({
  margin: '0.5rem 0',
  lineHeight: 1.65,
  fontSize: dp(4.5),
  color: 'black',
  wordBreak: 'break-word',
})
