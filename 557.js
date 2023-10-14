let s = "Let's take LeetCode contest"
//Output: "s'teL ekat edoCteeL tsetnoc"
let s1 = "God Ding" // "doG gniD"

const reverseWords = str => {
  let arr = str.split(' ')
  for (let i = 0; i < arr.length; i++) {
    arr[i]=arr[i].split('').reverse().join('')
  }
  return JSON.stringify(arr.join(' '))
}
console.log(reverseWords(s))