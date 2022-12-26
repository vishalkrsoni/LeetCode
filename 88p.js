let a = [1, 2, 3, 0, 0, 0], b = [2, 5, 6]

const merge1 = function (nums1, m, nums2, n) {
  for (const i of nums2) {
    nums1.pop()
  }
  for (const item of nums2) {
    nums1.push(item)
  }
  return nums1.sort((a, b) => a - b)
}



console.time('code2')
merge1(a, 3, b, 3)
console.timeEnd('code2')
