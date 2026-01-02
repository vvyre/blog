import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'
import { breakpoints } from 'styles/vars/breakpoints.css'
import { color } from 'styles/vars/color.css'

export const frame = style({
  zIndex: 99,
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
    [breakpoints.desktop]: {
      borderTop: 'none',
      height: dp(12),
      transform: 'translateY(0)',
      alignItems: 'flex-start',
    },
  },
})

export const buttonGroup = style({
  display: 'flex',
  flexDirection: 'column-reverse',
  gap: dp(2),
  '@media': {
    [breakpoints.desktop]: {
      flexDirection: 'row-reverse',
      gap: dp(1),
    },
  },
})

export const categoryBtn = style({
  margin: 0,
  display: 'inline-flex',
  paddingInline: dp(0),
  paddingBlock: dp(0),
  justifyContent: 'flex-start',
  alignItems: 'center',
  border: 'none',
  fontSize: dp(4),
  backgroundColor: 'transparent',
  color: color.text,
  fontWeight: 500,
  fontFamily: '"Mona Sans", "Pretendard", monospace',
  cursor: 'pointer',
})

export const tooltip = style({
  position: 'absolute',
  top: dp(5),
  right: dp(10),
  paddingBlock: dp(1),
  paddingInline: dp(2),
  border: `1px solid ${color.background_invert}`,
  color: color.text,
  fontFamily: 'Google Sans Code',
  borderRadius: dp(4),
  fontSize: dp(3.25),
  zIndex: 100,
  '@media': {
    'screen and (min-width: 600px)': {
      top: dp(3.5),
      right: dp(16),
    },
  },
})
