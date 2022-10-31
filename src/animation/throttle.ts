import { MyFunction } from '@justichentai/types-utils'

export interface Options {
  cb: MyFunction // 函数本体
  duration: number // 间隔时长
  immediate?: boolean // 是否立即执行
}

export default function throttle(options: Options) {
  const { cb, duration, immediate } = options

  let timeout: number | null = null

  return (...params: any[]) => {
    if (timeout) {
      return
    }

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
