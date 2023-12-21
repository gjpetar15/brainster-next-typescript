export function getPascalsTriangleRow(rowIndex: number): number[] {
  if (rowIndex === 0) return [1]
  if (rowIndex === 1) return [1, 1]
  const previousRow = getPascalsTriangleRow(rowIndex - 1)
  const newRow = [1]
  for (let i = 1; i < previousRow.length; i++) {
    newRow.push(previousRow[i - 1] + previousRow[i])
  }
  newRow.push(1)
  return newRow
}
