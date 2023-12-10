/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  if (cleanStr.length === 0) {
    return true;
  }
  let convertedString = cleanStr.split("");
  let reversedString = convertedString.reverse().join("");
  if (cleanStr === reversedString) {
    return true;
  } else {
    return false;
  }
}
module.exports = isPalindrome;
