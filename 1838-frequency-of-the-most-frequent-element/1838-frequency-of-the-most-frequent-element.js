/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    nums.sort((a, b) => a - b);

    let left = 0;
    let sum = 0;
    let ans = 1;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        // Cost to make every element in the window equal to nums[right]
        let cost = nums[right] * (right - left + 1) - sum;

        // If cost > k, shrink the window
        while (cost > k) {
            sum -= nums[left];
            left++;

            cost = nums[right] * (right - left + 1) - sum;
        }

        ans = Math.max(ans, right - left + 1);
    }

    return ans;
};