import * as css from './Youtube.css'
export function Youtube({ src }: { src: string }) {
  const IDX = src.lastIndexOf('/')
  const ID = src.slice(IDX + 1, -2)
  const url = `https://www.youtube.com/embed/${ID}`
  const caption = `Youtube Video - ${url}`

  return (
    <div className={css.frame}>
      <iframe
        className={css.youtube}
        src={url}
        title={caption}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        aria-label={caption}
      />
    </div>
  )
}
