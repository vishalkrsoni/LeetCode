let arr = [1, 2, 3, 4] // [1,3,6,10]
var runningSum = function (nums) {
  let out = [0, 0, 0, 0]
  let n = nums.length - 1
  for (let i = n; i > 0; i--) {
    let c = i
    while (c > 0)
      nums[i] += nums[--c]
  }
  return nums
};
console.log(runningSum(arr))