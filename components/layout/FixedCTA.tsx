import { PrimaryBtn, CancelBtn } from './Btn'
import * as css from './FixedCTA.css'

type CTAProps =
  | { gridType: '1Col'; confirmTxt: string; onConfirm: () => void }
  | {
      gridType: '2ColA'
      confirmTxt: string
      cancelTxt: string
      onConfirm: () => void
      onCancel: () => void
    }
  | {
      gridType: '2ColB'
      confirmTxt: string
      cancelTxt: string
      onConfirm: () => void
      onCancel: () => void
    }

export function FixedCTA(props: CTAProps) {
  return (
    <div className={css.frame}>
      {(() => {
        switch (propcss.gridType) {
          case '1Col': {
            const { confirmTxt, onConfirm } = props
            return <PrimaryBtn onClick={onConfirm}>{confirmTxt}</PrimaryBtn>
          }
          case '2ColA': {
            const { confirmTxt, cancelTxt, onConfirm, onCancel } = props
            return (
              <div className={css.grid2ColA}>
                <CancelBtn onClick={onCancel}>{cancelTxt}</CancelBtn>
                <PrimaryBtn onClick={onConfirm}>{confirmTxt}</PrimaryBtn>
              </div>
            )
          }
          case '2ColB': {
            const { confirmTxt, cancelTxt, onConfirm, onCancel } = props
            return (
              <div className={css.grid2ColB}>
                <CancelBtn onClick={onCancel}>{cancelTxt}</CancelBtn>
                <PrimaryBtn onClick={onConfirm}>{confirmTxt}</PrimaryBtn>
              </div>
            )
          }
          default: {
            return null
          }
        }
      })()}
    </div>
  )
}
