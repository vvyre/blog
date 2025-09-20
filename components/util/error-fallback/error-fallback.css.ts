import { style } from '@vanilla-extract/css'
import { BASE as BTN_BASE } from '../../button/btn.css'

export const BASE = style({
  width: '100%',
  height: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const ERROR_BTN = style([
  BTN_BASE,
  {
    width: 'fit-content',
  },
])
