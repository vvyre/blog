import { style } from '@vanilla-extract/css'

export const FRAME = style({
  margin: 0,
  listStyleType: 'none',
  color: 'red',
  '@media': {
    '(hover: hover) and (pointer: fine)': {
      ':hover': {
        color: 'black',
      },
    },
  },
})

export const LINK = style({
  display: 'block',
  paddingBlock: '0.4rem',
})

export const TITLE_TEXT = style({
  fontSize: '1rem',
  fontFamily: '"IBM Plex Mono", "Pretendard", monospace',
  wordSpacing: '-0.35rem',
  lineHeight: 1.3,
})
