import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'

export const menuList = style({
  listStyleType: 'none',
  paddingInline: dp(6),
  margin: `0 0 ${dp(4)} 0`,
  lineHeight: 1,
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
