let nums1 = [1, 2, 2, 1], nums2 = [2, 2]
//Output: [2]
var intersection = function (nums1, nums2) {
  nums1 = [...new Set(nums1)]
  nums2 = [...new Set(nums2)]
  let result = [], i = 0
  while (i < nums1.length) {
    if (nums2.includes(nums1[i])) result.push(nums1[i])
    i++
  }
  return result
};
console.log(intersection(nums1, nums2))

