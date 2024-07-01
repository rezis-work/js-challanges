function twoSum(array, target) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        result.push(i);
        result.push(j);
        return result;
      }
    }
  }
  return "wrong";
}

console.log(twoSum([3, 7, 11, 15, 2], 17));
