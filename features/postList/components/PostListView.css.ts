import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'
import { color } from 'styles/vars/color.css'
import { layouts } from 'styles/vars/layouts.css'

export const postListFrame = style({
  paddingInline: layouts.paragraph,
  '@media': {
    'screen and (min-width: 600px)': {},
  },
})

export const viewLink = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const postLinkFrame = style({
  display: 'block',
  listStyleType: 'none',
})

export const postLinkInner = style({
  display: 'block',
  textAlign: 'center',
  marginBottom: dp(1),
})

export const postLinkTitle = style({
  display: 'block',
  color: color.white,
  border: '1px solid transparent',
  backgroundColor: color.notion_default,
  paddingBlock: dp(1.5),
  paddingInline: dp(2.5),
  fontSize: dp(4),
  fontFamily: '"IBM Plex Mono", "Pretendard", monospace',
  wordSpacing: dp(-1.4),
  lineHeight: 1,
  '@media': {
    '(hover: hover) and (pointer: fine)': {
      ':hover': {
        border: `1px solid ${color.notion_default}`,
        backgroundColor: 'transparent',
        color: color.text,
      },
    },
  },
})
