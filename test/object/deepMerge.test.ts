import deepMerge from '../../src/object/deepMerge'

test('axis/getPosition.ts', () => {
  expect(
    deepMerge(
      {
        a: 1,
        b: 2,
        d: {
          e: 5,
          f: 6,
          l: {
            m: 5,
            j: 6,
          },
          m: {
            r: 1,
          },
        },
      },
      {
        b: 3,
        c: 4,
        d: {
          f: 7,
          g: 8,
          l: {
            m: 2,
            n: 3,
          },
        },
      }
    )
  ).toStrictEqual({
    a: 1,
    b: 3,
    c: 4,
    d: {
      e: 5,
      f: 7,
      g: 8,
      l: {
        m: 2,
        n: 3,
        j: 6,
      },
      m: {
        r: 1,
      },
    },
  })
})
