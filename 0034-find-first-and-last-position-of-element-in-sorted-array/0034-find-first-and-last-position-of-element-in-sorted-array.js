/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function(nums, target) {
    
    let first =(nums,target)=> {
     let left=0;
        let right=nums.length-1;
        let ans=-1;

        while(left<=right){
            let mid=Math.floor(left+(right-left)/2);

            if(nums[mid]==target){
                ans= mid;
                right=mid-1;
            }else if(nums[mid]>target){
                 right=mid-1;
            }else{
                left=mid+1;
            }
        }
        return ans;
 }
    let last = (nums,target)=>{
     let left=0;
        let right=nums.length-1;
        let ans=-1;

        while(left<=right){
            let mid=Math.floor(left+(right-left)/2);

            if(nums[mid]==target){
                ans= mid;
                left=mid+1;
            }else if(nums[mid]>target){
                 right=mid-1;
            }else{
                left=mid+1;
            }
        }
        return ans;
 }

    return [first(nums, target),last(nums, target)];
};