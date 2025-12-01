/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map(); // Use const
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    // If no solution is found, return null
};

console.log(twoSum([2,7,11,15],9))//[0,1]
console.log(twoSum([3, 2, 4], 6));//[1,2]
console.log(twoSum([3, 3], 6));//[0,1]
console.log(twoSum([1, 2, 3, 4, 5], 8));//[2,4]
