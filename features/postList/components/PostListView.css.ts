import { style } from '@vanilla-extract/css'
import { dp } from 'styles/size'
import { color } from 'styles/vars/color.css'
import { layouts } from 'styles/vars/layouts.css'

export const postListFrame = style({
  columnCount: 1,
  paddingInline: layouts.paragraph,
  '@media': {
    'screen and (min-width: 600px)': {
      columnCount: 2,
      columnGap: dp(4),
    },
  },
})
export const viewGroupFrame = style({
  breakInside: 'avoid',
  marginBottom: '0.8rem',
  display: 'grid',
  gridTemplateColumns: '1fr 5fr',
  gap: '1rem',
})

export const viewYear = style({
  width: '100%',
  paddingBlock: '0.4rem',
})

export const yearText = style({
  fontSize: dp(3.75),
  marginTop: dp(1),
  textAlign: 'left',
  fontWeight: 500,
  fontFamily: '"IBM Plex Mono", "Pretendard", monospace',
  color: color.accent,
})

export const viewLink = style({
  alignSelf: 'right',
})

export const postLinkFrame = style({
  margin: 0,
  listStyleType: 'none',
  color: color.accent,
  '@media': {
    '(hover: hover) and (pointer: fine)': {
      ':hover': {
        color: color.text,
      },
    },
  },
})

export const postLinkInner = style({
  display: 'block',
  paddingBlock: '0.4rem',
})

export const postLinkTitle = style({
  fontSize: '1rem',
  fontFamily: '"IBM Plex Mono", "Pretendard", monospace',
  wordSpacing: '-0.35rem',
  lineHeight: 1.45,
})
