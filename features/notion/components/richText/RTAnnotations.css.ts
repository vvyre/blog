import { style } from '@vanilla-extract/css'
import { dp } from 'styles/size'
import { color } from 'styles/vars/color.css'

export const bold = style({
  fontWeight: 600,
})

export const italic = style({
  fontStyle: 'italic',
})

export const code = style({
  verticalAlign: 'text-top',
  fontSize: dp(3.5),
  padding: '0.2rem 0.4rem 0.2rem 0.4rem',
  fontWeight: 400,
  color: color.notion_default,
  marginRight: '0.15rem',
  backgroundColor: color.notion_background_gray,
  fontFamily: 'Google Sans Code, monospace',
  borderRadius: dp(2),
  border: 'none',
})

export const strike = style({
  textDecoration: 'line-through',
  textDecorationThickness: '1px',
})

export const underline = style({
  textDecoration: 'underline',
  textUnderlineOffset: '0.25rem',
  textDecorationThickness: '1px',
})

export const link = style([
  {
    textDecoration: 'underline',

    textUnderlineOffset: '0.25rem',
    textDecorationThickness: '1px',
    '@media': {
      '(hover: hover) and (pointer: fine)': {
        ':hover': {},
      },
    },
  },
])
