import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'
import { breakpoints } from 'styles/vars/breakpoints.css'
import { color } from 'styles/vars/color.css'
import { layouts } from 'styles/vars/layouts.css'

export const postListFrame = style({
  paddingInline: layouts.paragraph,
  paddingBottom: dp(12),
  '@media': {
    [breakpoints.desktop]: {
      paddingBottom: dp(24),
    },
  },
})

export const viewLink = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: dp(4),
  '@media': {
    [breakpoints.desktop]: {
      gap: dp(7),
    },
  },
})

export const postLinkFrame = style({
  display: 'inline',
  listStyleType: 'none',
})

export const postLinkInner = style({
  display: 'inline-flex',
  gap: dp(1),
  alignItems: 'center',
  textAlign: 'center',
  border: '1px solid transparent',
})

const postLinkTitleBase = style({
  fontSize: dp(5),
  fontFamily: '"Mona Sans", "Pretendard", monospace',
  fontWeight: 700,
  lineHeight: 1.2,
  '@media': {
    [breakpoints.desktop]: {
      fontSize: dp(8),
    },
    '(hover: hover)': {
      selectors: {
        '&:hover': {
          textDecoration: 'underline',
          textUnderlineOffset: dp(2),
        },
      },
    },
  },
})

export const postLinkTitle = style([
  postLinkTitleBase,
  {
    display: 'inline-block',
    color: color.text,
  },
])

export const firstPostLinkTitle = style([
  postLinkTitleBase,
  {
    display: 'inline-block',
    transition: 'color .2s cubic-bezier(.4, 0, .4, 1)',
  },
])
