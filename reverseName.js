function reverseString(str) {
  let finalString = [];
  const splitted = str.split("");
  for (let i = splitted.length - 1; i >= 0; i--) {
    finalString.push(splitted[i]);
  }
  return finalString.join("");
}

reverseString("hello");
