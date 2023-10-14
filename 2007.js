let arr = [1, 4, 2, 6, 8, 3]
var findOriginalArray = function (arr) {
  let output = []
  let n = arr.length
  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++)
      if (((arr[i] * 2) == arr[j]) || ((arr[j] * 2) == arr[i])) {
        output.push(Math.min(arr[i], arr[j]))
        arr.splice(i, 1)
        arr.splice(j - 1, 1)
        i = 0
        j = 0
      }
  return (arr.length) == 0 ? output : []
};

console.log(findOriginalArray(arr))
console.log(findOriginalArray([6, 3, 0, 1]))
console.log(findOriginalArray([2, 1]))
console.log(findOriginalArray([0, 9, 6]))
console.log(findOriginalArray([4, 4, 16, 20, 8, 8, 2, 10]))

