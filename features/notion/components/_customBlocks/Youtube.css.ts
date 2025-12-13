import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'

export const frame = style({
  position: 'relative',
  width: '100%',
  paddingBottom: '56.25%', //16:9
  height: 0,
  borderRadius: dp(2),
})

export const youtube = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  left: 0,
  top: 0,
  borderRadius: dp(1.2),
})
