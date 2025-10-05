import { style } from '@vanilla-extract/css'

export const frame = style({
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

const gridBase = style({
  display: 'grid',
  gap: '0.5rem',
})

export const grid2ColA = style([
  gridBase,
  {
    gridTemplateColumns: '1fr 1fr',
  },
])

export const grid2ColB = style([
  gridBase,
  {
    gridTemplateColumns: '2fr 3fr',
  },
])
