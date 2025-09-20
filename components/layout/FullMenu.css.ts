import { style } from '@vanilla-extract/css'

export const FRAME = style({
  backgroundColor: 'rgba(255, 255, 255, 1)',
  zIndex: 999,
  width: '100vw',
  height: '100dvh',
  padding: '4rem 1rem',
  position: 'fixed',
  right: 0,
  top: 0,
  transition: 'transform 0.15s, opacity ease-in-out 0.15s',
  '@media': {
    'screen and (min-width: 600px)': {
      width: 'clamp(300px, 50vw, 400px)',
    },
  },
})

export const CONTENT_WRAPPER = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  justifyItems: 'center',
})
