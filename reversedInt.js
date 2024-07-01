function reverseInt(num) {
  let reversedNum = String(num).split("").reverse().join("");
  return +reversedNum;
}

console.log(reverseInt(1234));
