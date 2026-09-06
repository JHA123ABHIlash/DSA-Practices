/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();

    let str = "";

    for (let i = 0; i < s.length; i++) {
        if ((s[i] >= 'a' && s[i] <= 'z')|| (s[i]>='0' && s[i]<='9')) {
            str += s[i];
        }
    }

    let left = 0;
    let right = str.length - 1;

    while (left <= right) {
        if (str[left] !== str[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};