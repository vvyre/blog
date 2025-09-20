import { vars } from 'styles/themes.css'
import { objectKeys } from '@frfla/laser'
import { getRandomInt } from '../get-random-int'
import { useRandomIntState } from 'hooks/use-random-int-state'

const N = objectKeys(vars.notion).length

export const getRandomBackground = () => {
  const num = getRandomInt([0, N])
  return {
    backgroundColor: vars.notion[objectKeys(vars.notion)[num]],
  }
}

export const useRandomBackground = () => {
  const [P] = useRandomIntState([0, N])

  return {
    backgroundColor: vars.notion[objectKeys(vars.notion)[P]],
  }
}
