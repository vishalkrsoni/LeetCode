const moveZeroes = (nums) => {
  let p = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[p] = nums[i]
      nums[i] = 0
      p++
    }
  }
  return nums
}

// const moveZeroes = (nums) => {
//   let p = 0
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] == 0) {
//       if (nums[i + 1] != 0) {
//         [nums[p], nums[i + 1]] = [nums[i + 1], nums[p]]
//         p++
//       }
//     }
//   }
//   if (nums[nums.length - 1] != 0)
//     [nums[p], nums[nums.length - 1]] = [nums[nums.length - 1], nums[p]]
//   return nums
// }
// console.log(moveZeroes([0, 1, 0]))
// console.log(moveZeroes([1, 0, 0, 1]))
// console.log(moveZeroes([0, 0, 1, 0, 0]))
console.log(moveZeroes([0, 1, 0, 3, 12]))
// console.log(moveZeroes([0, 1, 0, 0, 8, 7, 0, 0, 0, 3, 0, 0, 12, 1]))
