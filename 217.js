var containsDuplicate = function (nums) {
  let out = {}
  for (let i = 0; i < nums.length; i++) {
    if (!out[nums[i]]) out[nums[i]] = 1
    else return true
  }
  return false
};