const reverseItems = (arr, start, end) => {
  while (end > start) {
    [arr[start], arr[end]] = [arr[end], arr[start]]
    start++
    end--
  }
}
var rotate = function (nums, k) {
  nums.reverse()
  k = k % nums.length
  reverseItems(nums, 0, k - 1)
  reverseItems(nums, k, nums.length - 1)
  return nums
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7, 8, 9], 2))