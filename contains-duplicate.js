/* Given an integer array nums,
return true if any value appears at least twice in the array,
and return false if every element is distinct. */

let nums = [1,2,3,7]
function containsDuplicate (nums) {
  nums.sort()
  let number;
  let bool = false
    nums.forEach(element => {
      if (number == element) {
        bool = true
      }else {
        number = element
      }

});
  console.log(bool)
};

containsDuplicate(nums)
