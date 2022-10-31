import { MyFunction } from '@justichentai/types-utils'

export interface Options {
  cb: MyFunction // 函数本体
  duration: number // 间隔时长
  immediate?: boolean // 是否立即执行
}

/**
 * 防抖
 * duration 内反复执行一直加时间 直到执行结束
 * duration 外执行 则会立即执行 or 延迟 duration 后执行
 */
export default function debounce(options: Options) {
  const { cb, duration, immediate } = options

  let timeout: number | null = null

  return (...params: any[]) => {
    if (timeout) clearTimeout(timeout)

    if (immediate) {
      const callNow = !timeout

      timeout = setTimeout(() => {
        timeout = null
      }, duration)

      callNow && cb(...params)
    } else {
      timeout = setTimeout(() => {
        cb(...params)
      }, duration)
    }
  }
}
