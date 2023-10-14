
let arr = [10, 20, 30, 5, 10, 50]
var maxAscendingSum = function (nums) {
  let max = nums[0], sum = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1])
      sum += nums[i]
    else
      sum = nums[i]
    max = Math.max(sum, max)
  }
  return max
};
console.log(maxAscendingSum(arr))