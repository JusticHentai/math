import getPosition from '../../src/axis/getPosition'

test('axis/getPosition.ts', () => {
  expect(
    getPosition({
      index: 10,
      column: 4,
    })
  ).toStrictEqual({ x: 2, y: 2 })
})
