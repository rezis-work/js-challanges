const reverseString = (str) => {
  let stack = [];

  for (let char of str) {
    stack.push(char);
  }

  let reversedStr = "";

  while (stack.length > 0) {
    reversedStr += stack.pop();
  }

  return reversedStr;
};

const reversedString = reverseString("Hello world");
console.log(reversedString);
