let s = 'title'
let t = 'paper'

var isIsomorphic = function (s, t) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i + 1)) return false;
  };
  return s.length == t.length
};
console.log(isIsomorphic(s, t))

var isIsomorphic1 = function (s, t) {
  let hash = {}
  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) hash[s[i]] = t[i]
    else if (hash[s[i]] != t[i]) return false
  };
  let s1 = new Set(Object.keys(hash))
  let s2 = new Set(Object.values(hash))
  return s.length == t.length ? s1.size == s2.size : false
}
console.log(isIsomorphic1(s, t))
