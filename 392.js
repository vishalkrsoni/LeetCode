var isSubsequence = function (s, t) {
  t = t.split('')
  s = s.split('')
  l = s.length - 1
  for (let i = 0; i < l; i++) {
    let currIndex = t.indexOf(s[i])
    let nextIndex = t.indexOf(s[i])
    let lastIndex = t.indexOf(s[i])
if(t.includes(s[i]) && t.includes(s[l]))
    if (t.indexOf(s[i]) < t.indexOf(s[i + 1])) return true
  }
  return false
}
console.log(isSubsequence('acd', 'aghbdgh'))
