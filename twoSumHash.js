const twoSum = (nums, target) => {
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (compliment in numMap && numMap[compliment] !== i) {
      return [numMap[compliment], i];
    }
    numMap[nums[i]] = i;
  }

  return [];
};

const nums = [2, 7, 9, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result);
