/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let left=0;
    let right=1;
    let count=1;
    while(right<nums.length){
        if(nums[left]==nums[right]){
            right++;
        }else{
            left++;
            [nums[left],nums[right]]=[nums[right],nums[left]];
            right++;
            count++;
        }
    }
    return count;
};