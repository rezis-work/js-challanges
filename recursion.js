function countDown(num) {
  if (num === 0) {
    console.log("And stop!");
    return;
  }
  console.log(num);
  countDown(num - 1);
}

function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(5));
