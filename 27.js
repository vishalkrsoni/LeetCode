var removeElement = function (nums, val) {
  nums = nums.filter((item) => item != val)
  return nums
};
console.log(removeElement([2, 3, 4, 5, 7, 3, 4, 8, 4, 12, 78, 4, 67], 4))


var removeElement1 = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums
};
console.log(removeElement1([2, 3, 4, 5, 7, 3, 4, 8, 4, 12, 78, 4, 67], 4))
