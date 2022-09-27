const maxArea = (height) => {
  let maxAr = 0, i = 0, j = height.length - 1
  while (i < j) {
    maxAr = Math.max(maxAr, Math.min(height[i], height[j]) * (j - i))
    height[i] <= height[j] ? i++ : j--
  }
  return maxAr
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
