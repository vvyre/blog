import { style } from '@vanilla-extract/css'

export const FRAME = style({
  paddingTop: 'env(safe-area-inset-top)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '2.5rem',
  '@media': {
    'screen and (min-width: 600px)': {
      height: '2.5rem',
    },
  },
})

export const TITLE_WRAPPER = style({
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center',
})

export const BACK_BTN = style({
  margin: 0,
  padding: 0,
  border: 'none',
  backgroundColor: 'transparent',
  color: 'gray',
  width: '1.5rem',
  height: '1.5rem',
  cursor: 'pointer',
})

export const TITLE = style({
  fontSize: '0.9rem',
  color: 'black',
  verticalAlign: 'super',
  fontWeight: 500,
  fontFamily: '"IBM Plex Mono", "Pretendard", monospace',
  wordSpacing: '-0.35rem',
  lineHeight: 1.35,
})
