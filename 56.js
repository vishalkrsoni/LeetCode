// [[1,6],[8,10],[15,18]]
// var merge = function (intervals) {
//   let output = [];
//   let n = intervals.length - 1;
//   for (let i = 0; i < n; i++) {
//     if (intervals[i + 1][0] > intervals[i][1])
//       output.push(intervals[i], intervals[i + 1])
//     else
//       output.push([intervals[i][0], intervals[i + 1][1]])
//     i++
//   }
//   return output
// };
// var merge = function (intervals) {
//   let output = [];
//   let n = intervals.length - 1;
//   for (let i = 0; i < n; i++) {
//       output.push([Math.min(...intervals[i],... intervals[i + 1]),
//       Math.max(...intervals[i],... intervals[i + 1])])
//       // output.push([intervals[i][0], intervals[i + 1][1]])
//     i++
//   }
//   return output
// };
let intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];

console.log(merge(intervals))
