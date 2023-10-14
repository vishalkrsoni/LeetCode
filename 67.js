let a = '11', b = '1'
let a1 = '1010', b1 = '1011'
var addBinary = function (a, b) {
  let l1 = a.length 
  let l2 = b.length
  let carry = 0, out = []
  for (let i = 0; i < l1; i++) {
    if (Number(a[l1]) + Number([l2]) + carry > 1) {
      carry = 1
      out.push(0)
    }
    else {
      carry = 0
      out.push(Number(a[--l1]) + Number([--l2]) + carry)
    }
  }
  return out
}
console.log(addBinary(a, b))
console.log(addBinary(a1, b1))
