/* Given an array nums containing n distinct numbers in the range [0, n],
return the only number in the range that is missing from the array. */

var missingNumber = function(nums) {
    let sum = 0
    let total = 0

    // primera opcion for
   /*  for(let i = 0; i < nums.length; i++){
       sum += nums[i]
       total += i + 1
   } */
    // segunda opcion forEach
   nums.forEach((e, index) => {
    sum += e
    total += index + 1
   });


      console.log(total-sum)

};

let x = [3,0,1,4,2,6]
missingNumber(x);
