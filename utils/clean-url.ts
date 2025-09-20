export function cleanUrl(url: string) {
  //특수문자 제거
  let result = url
  result = result.replace(/[^\w가-힣\s]/g, '')
  //공백 대체
  result = result.replace(/\s/g, '-')
  return result
}
