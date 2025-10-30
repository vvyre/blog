import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'
import { color } from 'styles/vars/color.css'

export const frame = style({
  zIndex: 9999,
  height: dp(18),
  paddingTop: dp(3),
  paddingBottom: 'env(safe-area-inset-bottom)',
  paddingInline: dp(3),
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  transform: `translateY(calc(100dvh - 100% - ${dp(6)}))`,
  position: 'fixed',
  backgroundColor: 'transparent',
  color: color.notion_default,
  flexDirection: 'row',
  '@media': {
    'screen and (min-width: 600px)': {
      borderTop: 'none',
      height: dp(12),
      transform: 'translateY(0)',
      alignItems: 'flex-start',
    },
  },
})

export const leftButtonGroup = style({
  display: 'flex',
  flexDirection: 'column-reverse',
  gap: dp(1),
  '@media': {
    'screen and (min-width: 600px)': {
      flexDirection: 'column',
      gap: 0,
    },
  },
})

export const categoryBtn = style({
  margin: 0,
  padding: 0,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: dp(7),
  height: dp(7),
  border: 'none',
  borderRadius: dp(20),
  fontSize: dp(5),
  backgroundColor: color.background,
  color: color.text,
  cursor: 'pointer',
  '@media': {
    'screen and (min-width: 600px)': {
      padding: 0,
      color: color.text,
      borderRadius: 0,
      backgroundColor: 'transparent',
    },
  },
})
