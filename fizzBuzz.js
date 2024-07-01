// version 1

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";

  if (num % 3 === 0) return "Fizz";

  if (num % 5 === 0) return "Buzz";

  return num;
}

console.log(fizzBuzz(9));

// version 2

function fizzBuzz2(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz2(30);
