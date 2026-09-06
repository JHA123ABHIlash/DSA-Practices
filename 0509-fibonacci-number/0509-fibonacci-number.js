/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let a=0;
    let b=1;
    let sum=0;

    if(n==1){
        return 1;
    }else if(n<=1){
        return 0;
    }

    for(let i=2;i<=n;i++){
        sum=a+b;
        a=b;
        b=sum;
    }
    return sum;
};