function palindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  if (str === reversedStr) return `this is palindrome`;

  return `this is not palindrome`;
}

console.log(palindrome("abba"));
console.log(palindrome("hello"));
