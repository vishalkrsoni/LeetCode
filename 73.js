const setVal = (row, col, matrix) => {
  for (let c = 0; c < matrix[0].length; c++) matrix[row][c] = 0
  for (let r = 0; r < matrix.length; r++) matrix[r][col] = 0
}
var setZeroes = function (matrix) {
  let positions = []
  for (let row = 0; row < matrix.length; row++)
    for (let col = 0; col < matrix[0].length; col++)
      if (matrix[row][col] == 0) positions.push([row, col])

  for (let i = 0; i < positions.length; i++) {
    let row = positions[i][0], col = positions[i][1]
    setVal(row, col, matrix)
  }
  console.log(matrix)
}

var setZeroes = function (matrix) {
  let firstRowZero, firstColZero
  for (let row = 0; row < matrix.length; row++)
    for (let col = 0; col < matrix[0].length; col++)
      if (matrix[row][col] === 0) {
        if (row === 0) firstRowZero = true;
        if (col === 0) firstColZero = true;
        matrix[row][0] = 0;
        matrix[0][col] = 0;
      }
  for (let row = 1; row < matrix.length; row++)
    for (let col = 1; col < matrix[0].length; col++)
      if (matrix[row][0] === 0 || matrix[0][col] === 0) matrix[row][col] = 0;
  if (firstRowZero) matrix[0].fill(0);
  if (firstColZero) {
    for (let row = 0; row < matrix.length; row++)
      matrix[row][0] = 0;
  }
  console.log(matrix)
}


let matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]] // [[1,0,1],[0,0,0],[1,0,1]]
let matrix1 = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]] // [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
let m = [[0, 1]] // [[0,0]]
setZeroes(matrix)
setZeroes(matrix1)
setZeroes(m)
