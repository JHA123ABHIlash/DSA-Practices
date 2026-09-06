/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num=x;
    let mul=10;
    let ans=0;

    while(num>0){
        let rem=num%10;
        ans=ans*mul+rem;
        num=parseInt(num/10);

    }
    if(ans==x){
        return true;
    }else{
        return false;
    }
};