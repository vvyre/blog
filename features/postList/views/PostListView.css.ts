import { style } from '@vanilla-extract/css'
import { color } from 'styles/vars/color.css'

export const viewGroupFrame = style({
  marginTop: '0.8rem',
  marginBottom: '0.8rem',
  display: 'grid',
  gridTemplateColumns: '1fr 4fr',
})

export const viewYear = style({
  width: '100%',

  paddingBlock: '0.4rem',
})

export const yearText = style({
  textAlign: 'left',
  fontWeight: 500,
  fontFamily: '"IBM Plex Mono", "Pretendard", monospace',
  color: color.accent,
})

export const postLinkFrame = style({
  margin: 0,
  listStyleType: 'none',
  color: color.accent,
  '@media': {
    '(hover: hover) and (pointer: fine)': {
      ':hover': {
        color: 'black',
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
  lineHeight: 1.3,
})
