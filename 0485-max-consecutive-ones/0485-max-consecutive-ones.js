/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let cnt=0;
    let cnt1=0;

    for(let i=0; i<nums.length; i++){
        if(nums[i]==1){
            cnt++;
            cnt1=Math.max(cnt1,cnt);
        }else{
            
            cnt=0;
        }
    }
    return cnt1;
};