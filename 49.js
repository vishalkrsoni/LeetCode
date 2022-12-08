const groupAnagrams = function (strs) {
  let hashMap = {}, sorted = []
  for (let str of strs) sorted.push(str.split('').sort().join(''))
  for (let i = 0; i < sorted.length; i++) {
    if (!hashMap[sorted[i]]) hashMap[sorted[i]] = [strs[i]]
    else hashMap[sorted[i]].push(strs[i])
  }
  return Object.values(hashMap)
}

let strs = ["eat", "tea", "tan", "ate", "nat", "bat","tab","abt"]

console.log(groupAnagrams(strs))