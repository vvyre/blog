import { style } from '@vanilla-extract/css'

export const FRAME = style({
  zIndex: 99,
  position: 'fixed',
  paddingInline: '1rem',
  paddingBottom: 'env(safe-area-inset-bottom)',
  bottom: '4rem',
  width: '100%',
  '@media': {
    'screen and (min-width: 600px)': {
      paddingLeft: '4.65rem',
      bottom: '2rem',
    },
  },
})

const GRID_BASE = style({
  display: 'grid',
  gap: '0.5rem',
})

export const GRID_2COL_A = style([
  GRID_BASE,
  {
    gridTemplateColumns: '1fr 1fr',
  },
])

export const GRID_2COL_B = style([
  GRID_BASE,
  {
    gridTemplateColumns: '2fr 3fr',
  },
])
