/* Given an array nums of n integers where
nums[i] is in the range [1, n], return
an array of all the integers in the
range [1, n] that do not appear in nums. */

var findDisappearedNumbers = function(nums) {
    const result = [];
    const map = new Map();

    nums.forEach((num, i) => map.set(num, i));

    for (let i = 1; i <= nums.length; i++) {
      if (!map.has(i)) result.push(i);
    }
    return result;

  };
