/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum=0;
    let n=nums.length;
    for(let i=0;i<n;i++){
        sum+=nums[i];
    }

    let left=0;

    for(let i=0;i<n;i++){
        
        right=sum-nums[i]-left;

        if(left==right){
            return i;
        }
        left+=nums[i];
    }
    return -1;
};