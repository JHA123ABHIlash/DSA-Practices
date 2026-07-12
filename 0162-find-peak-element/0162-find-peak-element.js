/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let ans=nums[0];
    let index=0;

    for(let i=1;i<nums.length;i++){
        if(ans<nums[i]){
            ans=nums[i];
            index=i;
        }
    }
    
    return index;
};