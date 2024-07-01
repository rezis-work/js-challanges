// to lowercase everything

// solution 1

function toCapitalize(str) {
  let capitalizedLetter = [];
  let lowerStr = str.toLowerCase().split(" ");
  for (let i = 0; i < lowerStr.length; i++) {
    capitalizedLetter.push(
      lowerStr[i].slice(0, 1).toUpperCase() + lowerStr[i].slice(1)
    );
  }
  return capitalizedLetter.join(" ");
}

console.log(toCapitalize("heLlo woRLd how are you"));

// solution 2

function capitalize(letter) {
  return letter
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalize("how aRe you"));
