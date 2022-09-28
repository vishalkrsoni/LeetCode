
let arr = [1, 1, 1, 1, 2, 4, 5]

var sumOfUnique = function (nums) {
  let HashMap = {}, unique = []
  for (let i = 0; i < nums.length; i++) {
    if (!HashMap[nums[i]]) HashMap[nums[i]] = 1
    else HashMap[nums[i]] += 1
  }
  Object.entries(HashMap).forEach(([key, val]) => {
    if (val == 1) unique.push(Number(key))
  })
  return unique.reduce((a, b) => a + b, 0)
}

console.log(sumOfUnique(arr))
