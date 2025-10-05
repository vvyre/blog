import { style } from '@vanilla-extract/css'
import { dp } from 'styles/size'
import { color } from 'styles/vars/color.css'

export const bookmarkFrame = style({
  display: 'block',
  backgroundColor: color.notion_background_gray,
  borderRadius: dp(2.5),
  padding: dp(6),
  marginBlock: dp(8),
  marginInline: dp(3),
  wordBreak: 'break-all',
})

export const bookmarkInner = style({ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' })

export const bookmarkIcon = style({
  display: 'inline-block',
  width: dp(4),
  height: dp(4),
  backgroundSize: dp(4),
  backgroundRepeat: 'no-repeat',
})

export const bookmarkTitle = style({
  display: 'flex',
  alignItems: 'center',
  gap: dp(2),
  margin: 0,
  fontSize: dp(4),
  fontWeight: 600,
  fontFamily: '"IBM Plex Mono", "Pretendard", sans-serif',
  wordSpacing: '-0.3rem',
  color: color.notion_default,
})

export const bookmarkUrl = style({
  fontSize: dp(3),
  fontWeight: 500,
  fontFamily: '"IBM Plex Mono", "Pretendard", sans-serif',
  wordSpacing: '-0.3rem',
  color: color.notion_gray,
})

export const bookmarkDescription = style({
  fontSize: dp(3.75),
  color: color.notion_gray,
  margin: 0,
  lineHeight: 1.35,
})
