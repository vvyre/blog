import { strike } from './RTAnnotations.css'

export function Strike({ ...props }) {
  return <s className={strike} {...props} />
}
