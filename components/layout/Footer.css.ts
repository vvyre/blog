import { style } from '@vanilla-extract/css'

export const frame = style({
  marginTop: '5rem',
  marginBottom: '3.85rem',
  textAlign: 'right',
  paddingInline: '0.75rem',
  '@media': {
    'screen and (min-width: 600px)': {
      marginBottom: '0.75rem',
    },
  },
})

export const footerText = style({
  fontFamily: '"IBM Plex Mono", "Pretendard", monospace',
  wordSpacing: '-0.25rem',
  fontSize: '0.7rem',
  fontWeight: 500,
})
