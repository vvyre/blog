import { style } from '@vanilla-extract/css'

export const bold = style({
  fontWeight: 600,
})

export const italic = style({
  fontStyle: 'italic',
})

export const code = style({
  verticalAlign: 'text-bottom',
  fontSize: '0.73rem',
  padding: '0.2rem 0.35rem 0.15rem 0.35rem',
  letterSpacing: '0.02rem',
  fontWeight: 500,
  marginRight: '0.15rem',

  border: 'none',
})

export const strike = style({})

export const underline = style({
  textDecoration: 'underline',
  textUnderlineOffset: '0.25rem',
  textDecorationThickness: '1px',
})

export const LINK = style([
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
