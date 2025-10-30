import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'
import { color } from 'styles/vars/color.css'

export const hamburgerMenuFrame = style({
  paddingInline: dp(6),
  margin: `0 0 ${dp(4)} 0`,
  lineHeight: 1,
  textAlign: 'right',
})

export const menuList = style({
  listStyleType: 'none',
  marginBottom: dp(20),
})

export const title = style({
  fontWeight: 600,
  fontSize: dp(5),
  lineHeight: 1.2,
  fontFamily: '"Mona Sans", "Pretendard", sans-serif',
  color: color.text,
  marginBottom: dp(12),
})

export const groupTitle = style({
  fontWeight: 600,
  lineHeight: 1.2,
  fontFamily: '"Mona Sans", "Pretendard", sans-serif',
  color: color.text,
})

export const articleList = style({
  listStyleType: 'none',
})

export const articleListRow = style([
  {
    marginBlock: dp(4.25),
    fontFamily: '"Mona Sans", "Pretendard", sans-serif',
    lineHeight: 1.2,
    color: color.text,
    '@media': {
      '(hover: hover) and (pointer: fine)': {
        ':hover': {
          textDecoration: 'underline',
          textUnderlineOffset: '0.25rem',
          textDecorationThickness: '1px',
        },
      },
    },
  },
])
