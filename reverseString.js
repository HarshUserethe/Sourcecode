// Simple and optimised way to reverse a given string in JS.

const reverseString = (string) => {
  const newString = string.split('').reverse().join('');
  return newString
}

const result = reverseString("HACKTOBERFEST")
console.log(result);
