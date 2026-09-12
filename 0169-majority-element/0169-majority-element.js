/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map=new Map();

    for(let i=0;i<nums.length;i++){
        if(!map.has(nums[i])){
            map.set(nums[i],(map.get(nums[i]))|| 1);
        }else{
            map.set(nums[i],(map.get(nums[i]))+1);
        }
    }

    let max=0;
    let num;
    for(let [key,value] of map){
        if(value>max){
            max=value;
            num=key;
        }
    }
    return num;
};