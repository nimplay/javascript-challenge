var missingNumber = function(nums) {
    let sum = 0
    let total = 0
    let num = 0

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
