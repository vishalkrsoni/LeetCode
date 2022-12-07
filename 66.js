
let arr = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]
// const plusOne = arr => (BigInt(arr.join('')) + BigInt(1)).toString().split('')
let plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] > 9) {
      digits[i] = 0;
    }
    else {
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};
//console.log(plusOne(arr))
var plusOne1 = function (digits) {
  for (var i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++
      break;
    } else if (i === 0) {
      digits[0] = 0
      digits = [1].concat(digits)
      break;
    } else {
      digits[i] = 0
    }
  }
  return digits
};
console.log(plusOne1(arr))
