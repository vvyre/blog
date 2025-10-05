import { style } from '@vanilla-extract/css'
import { color } from 'styles/vars/color.css'

export const frame = style({
  backgroundColor: color.notion_default,
  color: color.white,
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
      height: 'clamp(300px, 50vh, 400px)',
    },
  },
})

export const contentFrame = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  justifyItems: 'center',
})
