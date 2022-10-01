var generate = function (numRows) {
  let output = []
  for (let i = 0; i < numRows; i++) {
    output[i] = []
    output[i][0] = output[i][i] = 1
    for (let j = 1; j < i; j++) {
      output[i][j] = output[i - 1][j] + output[i - 1][j - 1]
    }
  }
  return output
};