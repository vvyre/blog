import { style } from '@vanilla-extract/css'
import { dp } from 'styles/size'

export const figureDefault = style({
  cursor: 'zoom-in',
  margin: 0,
  marginBlock: dp(8),
  padding: 0,
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  marginInline: dp(3),
})
export const figureZoomed = style({
  cursor: 'zoom-out',
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  top: 0,
  left: 0,
  margin: 0,
  padding: dp(4),
  width: '100vw',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.8)',
  zIndex: 1000,
})

export const figcaptionZoomed = style({
  marginTop: dp(2),
  fontSize: dp(3.5),
  color: '#fff',
  textAlign: 'center',
})

export const figcaption = style({
  marginTop: dp(2),
  fontSize: dp(3.5),
  color: '#555',
  textAlign: 'center',
})

export const imgDefault = style({
  borderRadius: dp(1),
  height: 'auto',
  maxWidth: '100%',
})

export const imgZoomed = style({
  borderRadius: dp(1),
  maxWidth: '90vw',
  maxHeight: '90vh',
  height: 'auto',
})
