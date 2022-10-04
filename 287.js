var findDuplicate = function (nums) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) map[nums[i]] = 1;
    else return nums[i]
  }
};