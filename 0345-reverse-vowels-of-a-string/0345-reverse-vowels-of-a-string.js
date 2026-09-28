/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
     s = s.split("");
    let left=0;
    let right=s.length-1;
     
     while(left<right){
        if((s[left]=='A' ||s[left]=='E' || s[left]=='I' || s[left]=='O' || s[left]=='U' || s[left]=='a'|| s[left]=='e' || s[left]=='i' || s[left]== 'o' || s[left]=='u') && (s[right]=='A' ||s[right]=='E' || s[right]=='I' || s[right]=='O' || s[right]=='U' || s[right]=='a'|| s[right]=='e' || s[right]=='i' || s[right]== 'o' || s[right]=='u')){

        [s[left],s[right]]=[s[right],s[left]];
        left++;
        right--;

     }else if(s[left]=='A' ||s[left]=='E' || s[left]=='I' || s[left]=='O' || s[left]=='U' || s[left]=='a'|| s[left]=='e' || s[left]=='i' || s[left]== 'o' || s[left]=='u'){
        right--;
     }else{
        left++;
     }
     }

     return s.join('');
};