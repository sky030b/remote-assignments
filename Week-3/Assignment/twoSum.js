function twoSum(nums, target) {
    // your code here

    for (let i = 0; i < nums.length; i++) {
        const ans2 = nums.findIndex((num) => num === target - nums[i])
        if (ans2 && ans2 > 0 && ans2 !== i) {
            return [i, ans2];
        }
    }

    return "not found";
}

/*
For example:
twoSum([2, 7, 11, 15], 9);
Should returns:
[0, 1]
Because:
nums[0]+nums[1] is 9
*/
console.log(twoSum([1, 2, 7, 11, 15], 9));
console.log(twoSum([3, 4, 7, 11, 15], 9));
console.log(twoSum([1, 2, 5, 11, 15], 10));
console.log(twoSum([1, 2, 8, 11, 15], 9));
console.log(twoSum([1, 2, 8, 11, 15], 11));