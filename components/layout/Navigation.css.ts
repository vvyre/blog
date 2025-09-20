import { style } from '@vanilla-extract/css'

export const FRAME = style({
  zIndex: 9999,
  height: '2.75rem',
  paddingBottom: 'env(safe-area-inset-bottom)',
  paddingInline: '0.75rem',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  transform: 'translateY(calc(100dvh - 100%))',
  position: 'fixed',
  backgroundColor: 'white',
  borderTop: '1px solid #f6f6f6',
  '@media': {
    'screen and (min-width: 600px)': {
      borderTop: 'none',
      height: '2rem',
      backgroundColor: 'springgreen',
      transform: 'translateY(0)',
    },
  },
})

export const CATEGORY_BTN = style({
  margin: 0,
  padding: 0,
  border: 'none',
  backgroundColor: 'transparent',
  color: 'lightgrey',
  width: '1.25rem',
  height: '1.5rem',
  cursor: 'pointer',
})
