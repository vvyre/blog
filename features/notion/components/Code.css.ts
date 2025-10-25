import { globalStyle, style } from '@vanilla-extract/css'
import { dp } from 'styles/size'
import { color } from 'styles/vars/color.css'
import { layouts } from 'styles/vars/layouts.css'

globalStyle('pre', {
  margin: 0,
  fontFamily: 'Google Sans Code, monospace',
  fontSize: '0.85rem',
  lineHeight: 1.5,
})

export const codeFrame = style({
  backgroundColor: color.notion_background_gray,
  borderRadius: dp(1),
  padding: dp(5),
  overflowX: 'auto',
  marginBlock: dp(8),
  marginInline: layouts.full,
})

export const codeHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: dp(4),
})

export const codeLang = style({
  fontSize: '0.85rem',
  fontWeight: 600,
  color: color.notion_default,
})

export const copyCode = style({
  paddingInline: dp(1),
  paddingBlock: dp(1),
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
})
