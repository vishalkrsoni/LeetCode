/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let arrays = matrix.length;
  let size = matrix[0].length;
  let resultArr = [];

  let top = 0;
  let bottom = arrays - 1;
  let left = 0;
  let right = size - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      resultArr.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      resultArr.push(matrix[i][right]);
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        resultArr.push(matrix[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        resultArr.push(matrix[i][left]);
      }
      left++;
    }
  }

  return resultArr;
}
