import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'
import { color } from 'styles/vars/color.css'
import { layouts } from 'styles/vars/layouts.css'
import { link } from './richText/RTLink.css'

export const bookmarkFrame = style({
  display: 'flex',
  flexDirection: 'column',

  marginBlock: dp(4),
  backgroundColor: color.notion_background_gray,
  borderRadius: dp(2.5),

  marginInline: layouts.full,
  wordBreak: 'break-all',
  '@media': {
    'screen and (min-width: 600px)': {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
})

export const bookmarkInner = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: layouts.paragraph,
  alignItems: 'flex-start',
})

export const bookmarkTitle = style({
  marginBottom: dp(1.5),
  fontSize: dp(4.25),
  fontWeight: 600,
  fontFamily: '"Mona Sans", "Pretendard", sans-serif',
  color: color.notion_default,
})

export const bookmarkUrl = style({
  lineHeight: 1.35,
  fontSize: dp(3),
  fontWeight: 500,
  fontFamily: '"Google Sans Code", "Pretendard", sans-serif',
  color: color.notion_gray,
})

export const bookmarkDescription = style({
  fontSize: dp(3.75),
  maxWidth: '20rem',
  color: color.notion_gray,
  margin: 0,
  lineHeight: 1.35,
})

export const bookmarkThumbnailWrapper = style({
  height: 'auto',
  '@media': {
    'screen and (min-width: 600px)': {
      display: 'flex',
      alignItems: 'stretch',
    },
  },
})

export const bookmarkThumbnail = style({
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  borderBottomRightRadius: dp(2.5),
  borderBottomLeftRadius: dp(2.5),

  '@media': {
    'screen and (min-width: 600px)': {
      height: '100%',
      maxHeight: dp(35),
      width: 'auto',
      objectFit: 'cover',
      borderBottomRightRadius: dp(2.5),
      borderBottomLeftRadius: 0,
      borderTopRightRadius: dp(2.5),
    },
  },
})

export const fallbackBookmark = style([
  link,
  bookmarkUrl,
  {
    display: 'block',
    backgroundColor: color.notion_background_gray,
    borderRadius: dp(2.5),
    padding: layouts.paragraph,
    marginBlock: dp(4),
    marginInline: layouts.full,
  },
])
