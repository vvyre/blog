import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'
import { color } from 'styles/vars/color.css'

export const link = style({
  color: color.notion_default,
  textDecoration: 'underline',
  textUnderlineOffset: dp(0.5),
  textDecorationColor: color.notion_default,
  textDecorationThickness: '1px',
  '@media': {
    'screen and (hover: hover)': {
      ':hover': {
        color: color.link,
        textDecorationColor: color.link,
      },
      ':active': {
        color: color.link,
        textDecorationColor: color.link,
      },
    },
  },
})
