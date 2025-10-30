import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'
import { color } from 'styles/vars/color.css'
import { layouts } from 'styles/vars/layouts.css'

export const postListFrame = style({
  paddingInline: layouts.paragraph,
  paddingBottom: dp(24),
  '@media': {
    'screen and (min-width: 600px)': {},
  },
})

export const viewLink = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const postLinkFrame = style({
  display: 'inline',
  listStyleType: 'none',
})

export const postLinkInner = style({
  display: 'inline-block',
  textAlign: 'center',
  marginBottom: dp(2),
})

export const postLinkTitle = style({
  display: 'inline-block',
  color: color.text_invert,
  border: '1px solid transparent',
  backgroundColor: color.background_invert,
  paddingBlock: dp(2),
  paddingInline: dp(2),
  fontSize: dp(4.25),
  fontFamily: '"Mona Sans", "Pretendard", monospace',
  lineHeight: 1.2,
  '@media': {
    '(hover: hover) and (pointer: fine)': {
      ':hover': {
        border: `1px solid ${color.background_invert}`,
        backgroundColor: color.background,
        color: color.text,
      },
    },
  },
})
