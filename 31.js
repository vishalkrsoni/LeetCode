var nextPermutation = function (nums) {
  let i = nums.length - 2;
  while (i >= 0 && nums[i + 1] <= nums[i]) i--;
  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[j] <= nums[i]) j--;
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  let k = i + 1, n = nums.length - 1;
  while (k < n) {
    [nums[k], nums[n]] = [nums[n], nums[k]];
    k++;
    n--
  }
  return nums
};
let n = [1, 2, 3]
let n1 = [3, 2, 1]
let n2 = [1, 1, 5]
console.log(nextPermutation(n))
console.log(nextPermutation(n1))
console.log(nextPermutation(n2))
