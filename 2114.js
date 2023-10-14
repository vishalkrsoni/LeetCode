let mostWordsFound = function (arr) {
  let max = 0
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, (arr[i].split(' ').length))
  }
  return max
};
let arr = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
console.log(mostWordsFound(arr))


let mostWordsFound1 = function (arr) {
  let max = 0
  arr.forEach(item => {
    max = Math.max(max, (item.split(' ').length))
  });
  return max
};
console.log(mostWordsFound1(arr))
