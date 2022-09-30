let arr = [2, 3, 4, 5, 7, 3, 4, 8, 4, 12, 78, 4, 67]

const removeDuplicates = (nums) => [...new Set(nums)].sort((a, b) => a - b)
console.log(removeDuplicates([2, 3, 4, 5, 7, 3, 4, 8, 4, 12, 78, 4, 67]))

const unique = (arr) => {
  let result = {}
  for (let i = 0; i < arr.length; i++) {
    result[arr[i]] ? result[arr[i]] += 1 : result[arr[i]] = 1
  }
  return Object.keys(result)
}
console.log(unique(arr))