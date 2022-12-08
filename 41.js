var firstMissingPositive = function (nums) {
  let firstMissing = 1
  let posNums = nums.filter(num => num > 0)
  let max = Math.max(...posNums)
  let numSet = new Set(posNums)
  while (firstMissing <= max) {
    if (!numSet.has(firstMissing)) return firstMissing
    firstMissing++
  }
  return firstMissing
};

let nums = [7, 8, 9, 11, 12]
let n = [3, 4, -1, 1]
console.log(firstMissingPositive(n))
console.log(firstMissingPositive(nums))
