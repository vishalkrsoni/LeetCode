let arr = ['h', 'e', 'l', 'l', 'o']
const reverseArray = arr => arr.reverse()
console.log(reverseArray(arr))


const reverseArray1 = arr => {
  let n = 0, len = arr.length
  while (n <= len / 2) {
    [arr[n], arr[len - 1 - n]] = [arr[len - 1 - n], arr[n]]
    n++
  }
  return arr
}
console.log(reverseArray1(['a', 'b', 'c','d']))

// const reverseString = (string) => {
//   if (string === '')
//     return ''
//   else
//     return reverseString(string.substr(1)) + string[0];
// }
// console.log(reverseString('ABCDE'), reverseString('abbcd'))