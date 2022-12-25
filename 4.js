var findMedianSortedArrays = function (nums1, nums2) {
  let out = [...nums1, ...nums2].sort((a, b) => a - b)
  let mid = out.length / 2
  if (out.length % 2 == 0) return (out[mid] + out[mid - 1]) / 2
  return out[(mid - 1 / 2)]
}
