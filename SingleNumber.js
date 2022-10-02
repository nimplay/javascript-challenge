/* Given a non-empty array of integers nums,
every element appears twice except for one.
Find that single one.
You must implement a solution with a linear
runtime complexity and use only constant extra space. */

var singleNumber = function(nums) {
    if (nums.length === 1) return nums[0];

  //sort
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let element = nums[i];
    if (element === nums[i + 1]) {
      i++;
    } else {
      return element;
    }
  }

 /*
  // bitwise XOR
 let res=0;
  for(let key of nums){
  res^=key;
  }
  return res; */

};

singleNumber([2,2,1])
