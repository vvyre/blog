import { style, styleVariants } from '@vanilla-extract/css'
import { link } from 'features/notion/components/richText/RTLink.css'
import { dp } from 'styles/dp'

export const listFrame = style({
  display: 'flex',
  flexDirection: 'column',
  listStyleType: 'none',
})

const listItemBase = style([
  {
    fontSize: dp(4),
    lineHeight: 1.65,
  },
])
export const listLink = style([link])
export const listitem = styleVariants({
  1: [
    listItemBase,
    {
      marginLeft: dp(0),
    },
  ],
  2: [
    listItemBase,
    {
      marginLeft: dp(3),
    },
  ],
  3: [
    listItemBase,
    {
      marginLeft: dp(6),
    },
  ],
})
