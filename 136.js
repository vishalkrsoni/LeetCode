
var singleNumber = function (nums) {
  let hashMap = {}
  for (let i = 0; i < nums.length; i++) {
    if (!hashMap[nums[i]]) hashMap[nums[i]] = 1
    else hashMap[nums[i]] += 1
  }
  // for (const item of nums) {
  //   hashMap[item] = hashMap[item] + 1 || 1
  // }
  for (const key in hashMap) {
    if(hashMap[key] ==1) return key
}

  // for (const [key, value] of Object.entries(hashMap))
  //   if (value == 1) return key
};
// let nums = [2, 2, 1]
let nums1 = [2, 1, 2, 4, 1]
console.log(singleNumber(nums1))