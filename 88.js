let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];

const merge = function (nums1, m, nums2, n) {
  let total = m + n - 1;
  m--, n--;
  while (n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[total--] = nums1[m--];
    } else {
      nums1[total--] = nums2[n--];
    }
  }
  return nums1;
};

console.time("code1");
console.log(merge(nums1, 3, nums2, 3));
console.timeEnd("code1");
