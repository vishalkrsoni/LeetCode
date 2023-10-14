
var countNegatives = function (grid) {
  let count = 0
  let row = grid[0].length
  let col = grid.length
  for (let i = 0; i < col; i++)
    for (let j = 0; j < row; j++)
      if (grid[i][j] < 0) {
        count += (row - j)
        break
      }
  return count
}