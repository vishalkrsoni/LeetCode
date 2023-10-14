let nums1 = [1, 2, 2, 1]
let nums2 = [2, 2]

var intersect = function (nums1, nums2) {
  let result = []
  if (nums1.length < nums2.length) {
    for (let i = 0; i < nums1.length; i++)
      if (nums2.includes(nums1[i])) {
        nums2.splice(nums2.indexOf(nums1[i]), 1)
        result.push(nums1[i])
      }
  }
  else {
    for (let i = 0; i < nums2.length; i++)
      if (nums1.includes(nums2[i])) {
        nums1.splice(nums1.indexOf(nums2[i]), 1)

        result.push(nums2[i])
      }
  }
  return result

};
console.log(intersect(nums1, nums2))