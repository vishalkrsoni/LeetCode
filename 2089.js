
var targetIndices = function (nums, target) {
  let output = []
  let arr = nums.sort((a, b) => a - b)
  for (let i = arr.indexOf(target); i <= arr.lastIndexOf(target); i++)
    if (arr.includes(target)) output.push(i)
  return output
}

