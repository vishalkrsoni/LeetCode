var twoSum = function (nums, target) {
  let left = 0, right = nums.length - 1
  while (left < right) {
    if (nums[left] + nums[right] > target) right--
    if (nums[left] + nums[right] < target) left++
    if (nums[left]+nums[right]==target) return [left + 1, right+1]
  }
  return []
}


console.log(twoSum([2, 7, 11, 6], 9))
console.log(twoSum([0, 0, 11, 6], 0))
console.log(twoSum([-1, -1, 11, 6], 2))
