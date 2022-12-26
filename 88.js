let a = [1, 2, 3, 0, 0, 0], b = [2, 5, 6]


const merge = function (nums1, m, nums2, n) {
  let total = m + n - 1
  m--, n--
  while (n >= 0)
    nums1[total--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--]
}

console.time('code1')
merge(a, 3, b, 3)
console.timeEnd('code1')

