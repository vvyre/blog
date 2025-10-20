export function pick(count: number, [min, max]: [number, number]) {
  const MIN = Math.min(min, max)
  const MAX = Math.max(min, max)

  if (count > MAX - MIN + 1) throw new Error('뽑아야 하는 수의 갯수는 범위를 초과할 수 없습니다')

  const result = new Set<number>()

  while (result.size < count) {
    const rNum = Math.floor(Math.random() * (MAX - MIN + 1)) + min
    result.add(rNum)
  }

  return Array.from(result)
}
