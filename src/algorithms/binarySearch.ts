export interface Options {
  length: number // 长度
  getContent: (index: number) => number // 获取内容
  target: number // 获取目标
}

/**
 * 二分法
 */
export default function binarySearch({
  length,
  getContent,
  target,
}: Options): number {
  if (length <= 0) return -1

  let lowIndex = 0
  let highIndex = length - 1

  while (lowIndex <= highIndex) {
    const midIndex = Math.floor((lowIndex + highIndex) / 2)

    const midContent = getContent(midIndex)

    if (target < midContent) {
      highIndex = midIndex - 1
    } else if (target > midContent) {
      lowIndex = midIndex + 1
    } else {
      return midIndex
    }
  }

  return -1
}
