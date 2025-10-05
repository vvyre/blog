import { style, styleVariants } from '@vanilla-extract/css'

export const frame = style({
  display: 'inline-flex',
  width: '100%',
  height: '3.15rem',
  position: 'relative',
  borderRadius: '0.3rem',
  alignItems: 'center',
  marginBottom: '1rem',
})

export const iconFrame = style({
  cursor: 'default',
  width: '3.15rem',
  height: '3.15rem',
  textAlign: 'center',
  paddingBlock: '0.9rem',
  fontSize: '1.25rem',
  position: 'absolute',
})

const baseInput = style({
  flex: 1,
  position: 'absolute',
  margin: 0,
  height: '3.15rem',
  width: '100%',
  fontSize: '1rem',
  border: '1px solid gray',
  borderRadius: '0.3rem',
  ':disabled': {
    backgroundColor: 'gainsboro',
    cursor: 'not-allowed',
  },
  ':focus': {
    outline: '1.5px solid black',
    outlineOffset: '0.15rem',
  },
})

export const base = styleVariants({
  default: [baseInput, { padding: '0 0.8rem' }],
  withIcon: [baseInput, { padding: '0 0.8rem 0 2.75rem' }],
})
