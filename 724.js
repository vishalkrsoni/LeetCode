
let arr = [7, 3, 1, 3, 5, 6]
let arr1=[2,1,-1]
var pivotIndex = function (nums) {
  let n = nums.length - 1
  let res = -1
  for (let i = 0; i <= n; i++) {
    let lSum = 0, rSum = 0
    let k = i, m = n
    while (k >= 0) {
      lSum += nums[k]
      k--
    }
    while (m >=i) {
      rSum += nums[m]
      m--
    }
    console.log(lSum, rSum)
    if (lSum == rSum) return i
  }
  return res
};

console.log(pivotIndex(arr))
console.log(pivotIndex(arr1))
