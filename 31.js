var nextPermutation = function (nums) {
  let i = nums.length - 2;
  while (i >= 0 && nums[i + 1] <= nums[i]) i--;
  
  if (i >= 0) {
    let end = nums.length - 1;
    while (end >= 0 && nums[end] <= nums[i]) end--;
    [nums[i], nums[end]] = [nums[end], nums[i]];
  }

  let left = i + 1, right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
  return nums
};
let n = [1, 2, 3]
let n1 = [3, 2, 1]
let n2 = [1, 1, 5]
console.log(nextPermutation(n))
console.log(nextPermutation(n1))
console.log(nextPermutation(n2))
