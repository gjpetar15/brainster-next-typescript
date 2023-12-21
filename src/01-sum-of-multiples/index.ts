export function sumOfMultiples(multiple: number, max: number): number {
  if (max < multiple) return 0
  let sum: number = 0
  for (let i = 1; i <= max; i++) {
    if (i % multiple === 0) sum += i
  }

  return sum
}
