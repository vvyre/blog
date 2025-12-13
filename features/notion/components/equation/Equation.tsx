/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: render katex */
import katex from 'katex'
import 'katex/dist/katex.min.css'
import type { NotionComponentProps } from 'features/notion/types'
import * as css from './Equation.css'

export function Equation({ block }: NotionComponentProps<'equation'>) {
  const html = katex.renderToString(block.equation.expression, {
    throwOnError: false,
    displayMode: true,
  })
  return <div className={css.equation} dangerouslySetInnerHTML={{ __html: html }} />
}
