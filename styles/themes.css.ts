import { globalStyle } from '@vanilla-extract/css'
import { dp } from './dp'
import { color } from './vars/color.css'
import { layouts } from './vars/layouts.css'

globalStyle(':root', {
  vars: {
    [layouts.full]: dp(3),
    [layouts.paragraph]: dp(6),
  },
})

globalStyle('body[data-theme="light"]', {
  vars: {
    [color.white]: '#ffffff',
    [color.background]: '#ffffff',
    [color.background_invert]: '#222428',
    [color.text]: '#222428',
    [color.text_invert]: '#ffffff',
    [color.link]: '#8650F6',
    [color.accent]: 'red',
    [color.ok]: 'springgreen',
    [color.notion_default]: '#222428',
    [color.notion_gray]: '#656769',
    [color.notion_brown]: '#976D57',
    [color.notion_orange]: '#CC782F',
    [color.notion_yellow]: '#C29343',
    [color.notion_green]: '#548164',
    [color.notion_blue]: '#487CA5',
    [color.notion_purple]: '#8A67AB',
    [color.notion_pink]: '#B35488',
    [color.notion_red]: '#C4554D',
    [color.notion_background_default]: '#FFFFFF',
    [color.notion_background_gray]: '#F7F8FA',
    [color.notion_background_brown]: '#F3EEEE',
    [color.notion_background_orange]: '#F8ECDF',
    [color.notion_background_yellow]: '#FAF3DD',
    [color.notion_background_green]: '#EEF3ED',
    [color.notion_background_blue]: '#E9F3F7',
    [color.notion_background_purple]: '#F6F3F8',
    [color.notion_background_pink]: '#F9F2F5',
    [color.notion_background_red]: '#FAECEC',
  },
})

globalStyle('body[data-theme="dark"]', {
  vars: {
    [color.white]: '#ffffff',
    [color.background]: '#191A1E',
    [color.background_invert]: '#ffffff',
    [color.text]: '#f2f4f8',
    [color.text_invert]: '#191A1E',
    [color.link]: '#AD70FF',
    [color.accent]: 'red',
    [color.ok]: 'springgreen',
    [color.notion_default]: '#f2f4f8',
    [color.notion_gray]: '#CFD4D6',
    [color.notion_brown]: '#A27763',
    [color.notion_orange]: '#CB7B37',
    [color.notion_yellow]: '#C19138',
    [color.notion_green]: '#4F9768',
    [color.notion_blue]: '#447ACB',
    [color.notion_purple]: '#865DBB',
    [color.notion_pink]: '#BA4A78',
    [color.notion_red]: '#BE524B',
    [color.notion_background_default]: '#191A1E',
    [color.notion_background_gray]: '#333333',
    [color.notion_background_brown]: '#2E2724',
    [color.notion_background_orange]: '#36291F',
    [color.notion_background_yellow]: '#372E20',
    [color.notion_background_green]: '#242B26',
    [color.notion_background_blue]: '#1F282D',
    [color.notion_background_purple]: '#2A2430',
    [color.notion_background_pink]: '#2E2328',
    [color.notion_background_red]: '#332523',
  },
})
