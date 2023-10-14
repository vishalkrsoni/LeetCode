
var peakIndexInMountainArray = function (arr) {
  let peak = 0
  let n = arr.length - 1
  for (let i = 1; i < arr.length - 1; i++)
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) peak = i
  return peak
}