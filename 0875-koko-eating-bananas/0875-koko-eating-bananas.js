/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

 function total_Hour(arr,hourly){
    let total=0;

    for(let i=0;i<arr.length;i++){
        if(! Number.isInteger(arr[i]/hourly)){
            total+=Math.floor(arr[i]/hourly)+1;
        }else{
           total+= Math.floor(arr[i]/hourly);
        }
    }
    return total;
 }


var minEatingSpeed = function(piles, h) {
    let high=Math.max(...piles);
    let low=1;
    let ans=Infinity;
    while(low<=high){

        let mid=Math.floor(low+(high-low)/2);

       let time= total_Hour(piles,mid);

       if(time <= h){
            ans=Math.min(ans,mid);
            high=mid-1;
       }else{
        low=mid+1;
       }


    }
    return ans;
};