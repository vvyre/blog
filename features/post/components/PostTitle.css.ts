import { style } from '@vanilla-extract/css'
import { dp } from 'styles/size'

export const title = style({
  fontSize: dp(7),
  marginTop: dp(8),
  color: 'black',
  textAlign: 'left',
  verticalAlign: 'middle',
  fontWeight: 900,
  fontFamily: '"IBM Plex Mono", "Pretendard", monospace',
  wordSpacing: '-0.8rem',
  lineHeight: 1.3,
  '@media': {
    'screen and (min-width: 600px)': {
      fontSize: dp(9),
    },
  },
})
