// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function(prices) {
    let maxProf = 0;
   let minProf = prices[0];
   for(let i = 1; i < prices.length; i++){
       minProf  = Math.min(minProf , prices[i]);
       maxProf = Math.max(maxProf, prices[i]-minProf );
   }
   return maxProf

};

console.log(maxProfit([7,6,4,3,1]))
