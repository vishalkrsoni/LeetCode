const setVal = (row, col, matrix) => {
  for (let c = 0; c < matrix[0].length; c++) matrix[row][c] = 0
  for (let r = 0; r < matrix.length; r++) matrix[r][col] = 0
}
var setZeroes = function (matrix) {
  let positions = []
  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[0].length; j++)
      if (matrix[i][j] == 0) positions.push([i, j])
  for (let i = 0; i < positions.length; i++) {
    let r = positions[i][0], c = positions[i][1]
    setVal(r, c, matrix)
  }
  console.log(matrix)
}

let matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]] // [[1,0,1],[0,0,0],[1,0,1]]
let matrix1 = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]] // [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
let m = [[0, 1]] // [[0,0]]
setZeroes(matrix)
setZeroes(matrix1)
setZeroes(m)
