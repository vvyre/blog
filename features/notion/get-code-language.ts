export const getCodeLanguage = (str: string) => {
  if (str === 'json') return str.toUpperCase()
  else return str.charAt(0).toUpperCase() + str.slice(1)
}
