/*
Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"
*/

//SOLUTION
function solve(s) {
    function getValue(substring) {
        return substring.split('').reduce((acc, char) => acc + (char.charCodeAt(0) - 'a'.charCodeAt(0) + 1), 0);
    }
    let maxConsonantValue = 0;
    let currentConsonantValue = 0;

    for (let char of s) {
        if ('aeiou'.indexOf(char) === -1) {
            currentConsonantValue += char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        } else {
            maxConsonantValue = Math.max(maxConsonantValue, currentConsonantValue);
            currentConsonantValue = 0;
        }
    }

    maxConsonantValue = Math.max(maxConsonantValue, currentConsonantValue);

    return maxConsonantValue;
}