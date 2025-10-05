import { style } from '@vanilla-extract/css'
import { dp } from 'styles/size'

export const ol = style({
  listStyleType: 'decimal',
  paddingLeft: dp(5),
  marginBlock: dp(2),
  fontSize: dp(4.5),
  marginInline: dp(6),
  maxWidth: `calc(100% - ${dp(14)})`,
  selectors: {
    'ol &': {
      marginInline: 0,
    },
  },
})

export const li = style({
  lineHeight: 1.65,
  wordBreak: 'break-word',
  width: 'auto',
  maxWidth: '100%',
})
