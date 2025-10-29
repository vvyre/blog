import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'
import { color } from 'styles/vars/color.css'

export const title = style({
  fontSize: dp(7),
  marginTop: dp(8),
  color: color.text,
  textAlign: 'left',
  verticalAlign: 'middle',
  fontWeight: 900,
  fontFamily: '"IBM Plex Mono", "Pretendard", monospace',
  wordSpacing: dp(-3.2),
  lineHeight: 1.3,
  '@media': {
    'screen and (min-width: 600px)': {
      fontSize: dp(9),
    },
  },
})
