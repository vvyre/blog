'use client'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import { getCodeLang } from 'features/notion/utils/getCodeLang.util'
import type { NotionComponentProps } from 'features/notion'
import { useTextCopy } from '@frfla/react-hooks'
import { CopyIcon, RocketIcon } from '@radix-ui/react-icons'
import { Btn } from 'components/base/Btn'
import * as css from './Code.css'

export function Code({ block }: NotionComponentProps<'code'>) {
  const codeLang = getCodeLang(block.code.language)
  const codeText = block.code.rich_text.map(txt => txt.plain_text).join('')
  const codeHtml = hljs.highlight(codeText, {
    language: block.code.language,
  }).value

  const [copy, isCopied] = useTextCopy(1000)
  return (
    <div className={css.codeFrame}>
      <div className={css.codeHeader}>
        <span className={css.codeLang}>{codeLang}</span>
        <button className={css.copyCode} onClick={() => copy(codeText)}>
          {isCopied ? <RocketIcon /> : <CopyIcon />}
        </button>
      </div>
      <pre dangerouslySetInnerHTML={{ __html: codeHtml }} />
    </div>
  )
}
