import { style } from '@vanilla-extract/css'
import { dp } from 'styles/size'

export const menuList = style({
  listStyleType: 'none',
  paddingInline: dp(3),
  margin: '0 0 5rem 0',
  lineHeight: 1,
  textAlign: 'right',
})

export const year = style({
  fontWeight: 700,
})

export const articleList = style({
  listStyleType: 'none',
})

export const articleListRow = style({
  marginBlock: dp(4),
})
