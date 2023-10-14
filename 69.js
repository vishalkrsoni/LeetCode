
var mySqrt = function (x) {
  for (let i = 0; i <= x; i++)
    if ((i * i) <= x && (i + 1) * (i + 1) > x) return i

};