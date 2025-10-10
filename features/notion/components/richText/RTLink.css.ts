import { style } from '@vanilla-extract/css'
import { color } from 'styles/vars/color.css'

export const link = style({
  color: color.notion_gray,
  textDecoration: 'underline',
  textUnderlineOffset: '0.25rem',
  textDecorationColor: color.notion_gray,
  textDecorationThickness: '1.5px',
  '@media': {
    'screen and (hover: hover)': {
      ':hover': {
        color: color.accent,
        textDecorationColor: color.accent,
      },
      ':active': {
        color: color.accent,
        textDecorationColor: color.accent,
      },
    },
  },
})
