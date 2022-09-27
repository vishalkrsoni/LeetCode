
let nums = [-1, 0, 1, 2, -1, -4] //Output: [[-1,-1,2],[-1,0,1]]
var threeSum = (nums) => {
  let output = {}, result = []
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] == 0)
          output[[nums[i], nums[j], nums[k]].sort((a, b) => a - b)] =
            [nums[i], nums[j], nums[k]]
      }
    }
  }
  return Object.values(output)
};
console.log(threeSum(nums))

