import { style } from '@vanilla-extract/css'
import { dp } from 'styles/size'
import { color } from 'styles/vars/color.css'

export const title = style({
  fontSize: dp(8),
  marginTop: dp(8),
  color: color.text,
  textAlign: 'left',
  verticalAlign: 'middle',
  fontWeight: 700,
  fontFamily: '"Mona Sans", "Pretendard", monospace',
  lineHeight: 1.3,
  '@media': {
    'screen and (min-width: 600px)': {
      fontSize: dp(8),
    },
  },
})
