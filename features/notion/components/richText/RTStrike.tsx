import { strike } from './RTAnnotations.css'

export function Strike({ ...props }) {
  return <del className={strike} {...props} />
}
