
var fib = function (num) {
  let cache = new Array(num + 1)
  cache[0] = 0
  cache[1] = cache[2] = 1
  for (let i = 3; i <= num; i++)
    cache[i] = cache[i - 1] + cache[i - 2]
  return cache[num]
}

console.log(fib(5))
