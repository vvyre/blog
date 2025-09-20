import * as css from './Divider.css'

/**
 *
 * @prop `(size)` 단 경계는 2, 섹션 경계는 1을 권장합니다.
 */
export function Divider({ size }: { size: number }) {
  return (
    <div
      className={css.BASE}
      style={{
        borderBottom: `${size}rem solid transparent`,
      }}
    />
  )
}
