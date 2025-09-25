const upperCaseLangs = ['CSS', 'HTML', 'JS', 'JSON', 'MD', 'TS', 'JSX', 'TSX', 'XML', 'YAML', 'SVG', 'PLAIN TEXT']

export const getCodeLang = (str: string) => {
  const upper = str.toUpperCase()
  return upperCaseLangs.includes(upper) ? upper : str.charAt(0).toUpperCase() + str.slice(1)
}
