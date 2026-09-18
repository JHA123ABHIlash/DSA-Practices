/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let leftsum=[];
    let rightsum=[];
    let ans=[];
    let n=nums.length;
    leftsum[0]=0;
    rightsum[n-1]=0
    for(let i=1;i<n;i++){
        leftsum[i]=leftsum[i-1]+nums[i-1];
        rightsum[n-i-1]=rightsum[n-i]+nums[n-i];
    }

    for(let i=0;i<n;i++){
        ans[i]=Math.abs(leftsum[i]-rightsum[i]);
    }

    return ans;

};