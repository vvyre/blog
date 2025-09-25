'use client'
import hljs from 'highlight.js'
import { getCodeLang } from 'features/notion/getCodeLang'
import type { NotionComponentProps } from 'types/notion'
import { useTextCopy } from '@frfla/react-hooks'
import { CopyIcon, RocketIcon } from '@radix-ui/react-icons'
import { Btn } from 'components/base/Btn'

export function Code({ block }: NotionComponentProps<'code'>) {
  const codeLang = getCodeLang(block.code.language)
  const codeText = block.code.rich_text.map(txt => txt.plain_text).join('')
  const codeHtml = hljs.highlight(codeText, {
    language: block.code.language,
  }).value

  const [copy, isCopied] = useTextCopy(1000)
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p>{codeLang}</p>
        <Btn onClick={() => copy(codeText)}>{isCopied ? <RocketIcon /> : <CopyIcon />}</Btn>
      </div>
      <pre dangerouslySetInnerHTML={{ __html: codeHtml }} />
    </div>
  )
}
