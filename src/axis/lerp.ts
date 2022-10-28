/**
 * 线性插值 其实就是ab两点连线上 选一点代表这一段的想要值
 * @a 低点
 * @b 高点
 * @n 当前选点到低点的距离 范围[0,1]
 * @returns {number}
 */
export function lerp(a: number, b: number, n: number) {
  return (1 - n) * a + n * b
}
