import { style } from '@vanilla-extract/css'

export const FRAME = style({
  paddingInline: '1rem',
  backgroundColor: 'springgreen',
  '@media': {
    'screen and (min-width: 600px)': {
      backgroundColor: 'transparent',
    },
  },
})

export const ICON_WRAPPER = style({
  marginBottom: '0.5rem',
})

export const ICON = style({
  fontSize: '2.5rem',
})

export const SUBTITLE = style({
  fontSize: '0.95rem',
})
