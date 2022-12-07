var searchInsert = function (arr, target) {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (arr[mid] == target) return mid
    else if (target > arr[mid]) left = mid + 1
    else if (target < arr[mid]) right = mid - 1
  }
  return right + 1
};
console.log(searchInsert([1, 2, 3, 6, 8], 5))