let arr = [1, 2, 2, 1]
var countKDifference = function (arr, k) {
  let count = 0
  for (let i = 0; i < arr.length; i++)
    for (let j = i + 1; j < arr.length; j++)
      if (Math.abs(arr[i] - arr[j]) == k) count++
  return count
};

console.log(countKDifference(arr, 1))