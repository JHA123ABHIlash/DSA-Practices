/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let left=0;
    let right=1;
    let cnt=0;
    while(right<nums.length){
    
        if((nums[left] == nums[right])&& cnt<1){
            left++;
            cnt++;
            nums[left]=nums[right];

        }else if(nums[left] != nums[right]){
            cnt=0;
            left++;
            
            nums[left]=nums[right];
        }
        right++;
    }
    return left+1;
};