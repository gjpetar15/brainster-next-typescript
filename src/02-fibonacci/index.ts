export function fibonacci(n: number): number[] {
  if (n === 0) return []
  if (n === 1) return [0]

  const fib: number[] = []

  for (let i = 0; i < n; i++) {
    if (i < 2) {
      fib.push(i)
      continue
    }
    fib.push(fib[i - 1] + fib[i - 2])
  }

  return fib
}
