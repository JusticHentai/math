import { isObject } from '@justichentai/is'

type IObject = { [key: string]: any }

export default function deepMerge(
  defaultObj: IObject,
  currentObj: IObject
): IObject {
  const res = { ...defaultObj, ...currentObj }

  for (const key in res) {
    if (!defaultObj[key] || !currentObj[key] || !isObject(defaultObj)) {
      continue
    }

    Object.assign(res, {
      [key]: deepMerge(defaultObj[key], currentObj[key]),
    })

    console.log(res)
  }

  return res
}
