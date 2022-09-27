var maxProfit = function (prices) {
  let maxProfit = 0,minPrice=Infinity
  for (let price of prices) {
        minPrice=Math.min(price,minPrice)
        let profit=price-minPrice
        maxProfit=Math.max(profit,maxProfit)
  }

  return maxProfit
};