/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  if (str.length === 0) {
    return 0;
  }
  let convertedString = str.split("").join("").toLowerCase();
  let vowels = ["a", "e", "i", "o", "u"];
  count = 0;
  vowels.forEach((vowel) => {
    for (let i = 0; i < convertedString.length; i++) {
      if (convertedString[i] === vowel) {
        count++;
      }
    }
  });
  return count;
}

module.exports = countVowels;
