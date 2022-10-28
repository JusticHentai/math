import getDistance from '../../src/axis/getDistance'

test('axis/getDistance.ts', () => {
  expect(getDistance({ x: 0, y: 0 }, { x: -3, y: -4 })).toBe(5)
})
