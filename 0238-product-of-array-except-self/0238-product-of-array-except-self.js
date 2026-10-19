/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n=nums.length;
    let res=[];
    let left_pro=1;
    let right_pro=1;


    for(let i=0;i<n;i++){
        res.push(left_pro);
        left_pro*=nums[i];
        
    }

    for(let j=n-1;j>=0;j--){
        res[j]=res[j]*right_pro;
        right_pro*=nums[j];
    }
    return res;
    
};