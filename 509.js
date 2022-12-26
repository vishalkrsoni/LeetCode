var fib = function (num) {
  let cache = new Array(num + 1)
  cache[0] = 0
  cache[1] = cache[2] = 1
  for (let i = 3; i <= num; i++)
    cache[i] = cache[i - 1] + cache[i - 2]
  return cache
}


var fib1 = function (num) {
  if (num <= 1) return num;
  else return fib(num - 1) + fib(num - 2)
}



var startTime = performance.now()
fib1(295)
var endTime = performance.now()
console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)



// console.time('code2')
// console.timeEnd('code2')
// // console.log(fib1(4))

