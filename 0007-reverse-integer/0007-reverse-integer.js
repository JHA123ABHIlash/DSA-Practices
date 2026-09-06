/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign=x<0 ?-1 : 1;
    x=Math.abs(x);


    let num=10;
    let ans=0;

    while(x>0){
        let rem=x%10;
        ans=ans*num+rem;
        x=parseInt(x/10);
        
    }

    if (ans < -2147483648 || ans > 2147483647) {
        return 0;
    }

    return ans*sign;
};