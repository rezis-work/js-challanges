const text = "hello my my my me";

const wordCounter = (str) => {
  const lowerText = str.toLowerCase();

  const wordMap = {};

  const words = lowerText.split(/\s+/);

  for (const word of words) {
    if (word in wordMap) {
      wordMap[word]++;
    } else {
      wordMap[word] = 1;
    }
  }

  return wordMap;
};

const result = wordCounter(text);
console.log(result);
