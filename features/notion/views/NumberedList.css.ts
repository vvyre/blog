import { style } from '@vanilla-extract/css'
import { dp } from 'styles/size'

export const ol = style({
  listStyleType: 'decimal',
  paddingLeft: dp(4),
  marginBlock: dp(2),
  fontSize: dp(4.5),
})
