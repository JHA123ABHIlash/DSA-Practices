/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let sum=0;
    let ans=0;
    let map=new Map();
    map.set(0,(map.get(0))||+1);

    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        let ques=sum-k;

        if(map.has(ques)){
            ans+=map.get(ques);
        }

        if(map.has(sum)){
             map.set(sum,(map.get(sum))+1);
        }else{
             map.set(sum,(map.get(sum))||1);
        }
        
    }
    return ans;
};