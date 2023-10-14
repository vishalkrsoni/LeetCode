let arr = [2, 3, 1, 5, 3]
let extra = 3
const kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies)
  for (let i = 0; i < candies.length; i++)
    candies[i] + extraCandies >= max ? candies[i] = true : candies[i] = false
  return candies
}
console.log(kidsWithCandies(arr, extra))