export interface Options {
  index: number // index 从 0 开始
  column: number // 列数
}

export interface Result {
  x: number // x 坐标 从 0 开始
  y: number // y 坐标 从 0 开始
}

/**
 * 获取对应 index 的坐标
 * @param options
 */
export default function getPosition(options: Options): Result {
  const { column, index } = options

  const y = Math.floor(index / column)
  const x = Math.floor(index % column)

  return {
    x,
    y,
  }
}
