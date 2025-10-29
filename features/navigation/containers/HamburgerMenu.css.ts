import { style } from '@vanilla-extract/css'
import { dp } from 'styles/size'

export const hamburgerMenuFrame = style({
  paddingInline: dp(6),
  margin: '0 0 5rem 0',
  lineHeight: 1,
  textAlign: 'right',
})

export const menuList = style({
  listStyleType: 'none',
})

export const title = style({
  fontWeight: 600,
  fontSize: dp(5),
  lineHeight: 1.2,
  fontFamily: '"Mona Sans", "Pretendard", sans-serif',
  marginBottom: dp(12),
})

export const groupTitle = style({
  fontWeight: 600,
  lineHeight: 1.2,
  fontFamily: '"Mona Sans", "Pretendard", sans-serif',
})

export const articleList = style({
  listStyleType: 'none',
})

export const articleListRow = style([
  {
    marginBlock: dp(4.25),
    fontFamily: '"Mona Sans", "Pretendard", sans-serif',
    lineHeight: 1.2,
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
