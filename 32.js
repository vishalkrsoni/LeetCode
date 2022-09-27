class Stack {
  constructor() {
    this.arr = []
  }
  push = (item) => this.arr.push(item)
  
  pop = () => this.isEmpty() ? `Empty Stack` : this.arr.pop()
  
  peek = () => this.isEmpty() ? `Empty Stack` : this.arr[this.arr.length - 1]
  
  isEmpty = () => this.arr.length == 0
}

var longestValidParentheses = function (s) {
  let stack = new Stack()
  let start = 0, len = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push(i)
    else {
      if (stack.isEmpty()) start = i + 1;
      else {
        stack.pop()
        len = Math.max(len, stack.isEmpty() ? (i + 1 - start) : i - stack.peek());
      }
    }
  }
  return len
}

// // Array as a stack
// var longestValidParentheses = function (s) {
//   let arr = []
//   let start = 0, len = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === '(') arr.push(i)
//     else {
//       if (arr.length === 0) start = i + 1;
//       else {
//         arr.pop()
//         len = Math.max(len, arr.length === 0 ? ((i + 1) - start) : i - arr[arr.length - 1]);
//       }
//     }
//   }
//   return len
// }


// // Using two Counters
// var longestValidParentheses1 = function (s) {
//   let len = 0, open = 0, close = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === '(') open++;
//     if (s[i] === ')') close++;
//     if (open === close) len = Math.max(len, open + close);
//     if (close > open) open = close = 0;
//   }
//   open = close = 0;
//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] === '(') open++;
//     if (s[i] === ')') close++;
//     if (open === close) len = Math.max(len, open + close);
//     if (open > close) open = close = 0;
//   }
//   return len;
// }

let input = '))())'
console.log(longestValidParentheses(input))

