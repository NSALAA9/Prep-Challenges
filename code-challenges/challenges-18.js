'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    // write your code here
    const words = str.split(' '); // Split the string into an array of words
  const middleIndex = Math.floor(words.length / 2); // Find the index of the middle word

  // Extract the middle word from the array and return its length
  return words[middleIndex].length;
};

// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    // write your code here
    const countLetters = (str) => {
        const letterCount = new Map();
        for (const char of str) {
          letterCount.set(char, (letterCount.get(char) || 0) + 1);
        }
        return letterCount;
      };
    
      const letterCount1 = countLetters(str1);
      const letterCount2 = countLetters(str2);
    
      if (letterCount1.size !== letterCount2.size) {
        return false;
      }
    
      for (const [letter, count] of letterCount1.entries()) {
        if (count !== letterCount2.get(letter)) {
          return false;
        }
      }
    
      return true;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };