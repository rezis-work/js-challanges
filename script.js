function reverseInt(num) {
  let reversedNum = String(num).split("").reverse().join("");
  return parseInt(reversedNum) * Math.sign(num);
}

console.log(reverseInt(-1234));
