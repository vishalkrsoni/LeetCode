var isSubsequence = function (s, t) {
  t = t.split('')
  s = s.split('')
  len = s.length - 1
  let currPos=0;
  for (let i = 0; i < len; i++) {
      if(t.includes(s[i])&& t.includes(s[len])){
if (t.indexOf(s[i], currPos) != -1) {
      currPos = t.indexOf(s[i])
    } else {
return false
    }
      }
    
  }
  return true
}
console.log(isSubsequence('abc', 'ahbgdc'))
