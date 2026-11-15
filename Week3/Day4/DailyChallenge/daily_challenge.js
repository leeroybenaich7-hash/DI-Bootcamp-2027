// ============================================================
// Week 3 - Day 4 - Daily Challenge : Anagram
// ============================================================
// Instructions
// Create a function that:
//   - takes in two strings as two parameters
//   - and returns a boolean that indicates whether or not
//     the first string is an anagram of the second string.
//
// What is an anagram?
// An anagram is another word or phrase formed by rearranging
// letters of the first word or phrase.
//
// Example of anagrams
// "Astronomer" is an anagram of "Moon starer"
// "School master" is an anagram of "The classroom"
// "The Morse Code" is an anagram of "Here come dots"
//
// Do we need to consider whitespace?
// Trim whitespace prior to comparison.
// ============================================================

// remove the spaces, put in lower case, then sort the letters
const cleanWord = (str) =>
  str.toLowerCase().split("").filter((letter) => letter !== " ").sort().join("");

const isAnagram = (str1, str2) => cleanWord(str1) === cleanWord(str2);

console.log(isAnagram("Astronomer", "Moon starer")); // true
console.log(isAnagram("School master", "The classroom")); // true
console.log(isAnagram("The Morse Code", "Here come dots")); // true
console.log(isAnagram("Hello", "World")); // false
