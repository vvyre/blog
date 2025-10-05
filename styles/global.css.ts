import { globalStyle } from '@vanilla-extract/css'
import { dp } from './size'

globalStyle('*, *:before, *:after', {
  boxSizing: 'border-box',
  MozBoxSizing: 'border-box',
})

globalStyle('html', {
  fontSize: '100%',
  margin: 0,
  padding: 0,
})

globalStyle('body', {
  fontFamily: '"Pretendard"',
  height: 'auto',
  backgroundColor: 'white',
  margin: '0',
  padding: 0,
  lineHeight: 1,
  fontFeatureSettings: "'case', 'ss02',  'cv13', 'cv09', 'ss05', 'ss07'",
  WebkitFontFeatureSettings: "'case', 'ss02',  'cv13', 'cv09', 'ss05', 'ss07'",
  textSizeAdjust: '100%',
  WebkitTextSizeAdjust: '100%',
  MozTextSizeAdjust: '100%',
  MozOsxFontSmoothing: 'grayscale',
  WebkitFontSmoothing: 'antialiased',
})

globalStyle('main', {
  margin: '0 auto',
  width: '100%',
})

globalStyle('article, section, nav, p, h1, h2, h3, h4, h5, h6', {
  margin: 0,
  padding: 0,
})

globalStyle('body[data-theme] main, body[data-theme] nav, body[data-theme] section', {
  transition: 'background-color 0.15s ease, color 0.15s ease',
})

globalStyle('a', {
  fontFeatureSettings: "'case', 'ss02',  'cv13', 'cv09', 'ss05', 'ss07'",
  WebkitFontFeatureSettings: "'case', 'ss02',  'cv13', 'cv09', 'ss05', 'ss07'",
  fontSize: 'inherit',
  textDecoration: 'none',
  color: 'inherit',
  outline: 0,
  backgroundColor: 'transparent',
  border: 'none',
})

globalStyle('ul, ol', {
  display: 'block',
  width: '100%',
  padding: 0,
  margin: 0,
})

globalStyle('pre', {
  overflow: 'auto',
})

globalStyle('code, pre, pre span', {
  fontFeatureSettings: 'normal',
  MozTabSize: 2,
  tabSize: 2,
})

globalStyle('hr', {
  display: 'block',
  height: '1px',
  border: 0,
  margin: 0,
  padding: 0,
})

globalStyle('img, video, canvas, svg', {
  verticalAlign: 'middle',
})

globalStyle('::selection, ::-moz-selection', {
  backgroundColor: 'transparent',
})

globalStyle('p, span, code, ul li, ol li, li', {
  fontSize: '100%',
})

globalStyle('span>code', {
  wordBreak: 'break-all',
})

//global UL, OL Styling b/c of nested selector issue of vanilla extract

globalStyle('article ul', {
  listStyleType: 'disc',
})

globalStyle('article ul ul', {
  listStyleType: 'circle',
})

globalStyle('article ul ul ul', {
  listStyleType: 'square',
})

globalStyle('article ol', {
  listStyleType: 'decimal',
})

globalStyle('article ol ol', {
  listStyleType: 'lower-alpha',
})

globalStyle('article ol ol ol', {
  listStyleType: 'lower-roman',
})
