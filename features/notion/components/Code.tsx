/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: render codeblock html */
'use client'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import { useTextCopy } from '@frfla/react-hooks'
import { CopyIcon, RocketIcon } from '@radix-ui/react-icons'
import type { NotionComponentProps } from 'features/notion'
import { getCodeLang } from 'features/notion/utils/getCodeLang.util'
import { getPlainText } from '../utils/getPlainText.util'
import * as css from './Code.css'

export function Code({ block }: NotionComponentProps<'code'>) {
  'use memo'
  const codeLang = getCodeLang(block.code.language)
  const codeText = getPlainText(block.code.rich_text)
  const codeHtml = hljs.highlight(codeText, {
    language: block.code.language,
  }).value

  const [copy, isCopied] = useTextCopy(1000)
  return (
    <div className={css.codeFrame}>
      <div className={css.codeHeader}>
        <span className={css.codeLang}>{codeLang}</span>
        <button type="button" className={css.copyCode} onClick={() => copy(codeText)}>
          {isCopied ? <RocketIcon /> : <CopyIcon />}
        </button>
      </div>
      <pre dangerouslySetInnerHTML={{ __html: codeHtml }} />
    </div>
  )
}
