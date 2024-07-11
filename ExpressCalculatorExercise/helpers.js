/**
 * Build a frequency counter object from an array
 * @param {Array} arr any array
 */
function createFrequencyCounter(arr) {
  return arr.reduce((acc, next) => {
    acc[next] = (acc[next] || 0) + 1;
    return acc;
  }, {});
}

/**
 * Find the most common element in the array
 * @param {Array} arr any array
 */
function findMode(arr) {
  const freqCounter = createFrequencyCounter(arr);

  let count = 0;
  let mostFrequent;

  for (const key in freqCounter) {
    if (freqCounter[key] > count) {
      mostFrequent = key;
      count = freqCounter[key];
    }
  }

  return +mostFrequent;
}

/**
 * Attempt to convert an array of strings to an array of numbers
 * @param {Array} numsAsStrings array of strings
 * @returns {Array|Error} an array or an error object
 */
function convertAndValidateNumsArray(numsAsStrings) {
  const result = numsAsStrings.map((str, idx) => {
    const num = Number(str);
    if (Number.isNaN(num)) {
      return new Error(`The value '${str}' at index ${idx} is not a valid number.`);
    }
    return num;
  });

  for (const item of result) {
    if (item instanceof Error) return item;
  }

  return result;
}

/**
 * Find the mean of an array of numbers
 * @param {Array} nums array of numbers
 * @returns {number} the mean of the numbers
 */
function findMean(nums) {
  if (nums.length === 0) return 0;
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  return sum / nums.length;
}

/**
 * Find the median of an array of numbers
 * @param {Array} nums array of numbers
 * @returns {number} the median of the numbers
 */
function findMedian(nums) {
  nums.sort((a, b) => a - b);

  const middleIndex = Math.floor(nums.length / 2);

  if (nums.length % 2 === 0) {
    return (nums[middleIndex] + nums[middleIndex - 1]) / 2;
  } else {
    return nums[middleIndex];
  }
}

module.exports = {
  createFrequencyCounter,
  findMean,
  findMedian,
  findMode,
  convertAndValidateNumsArray
};
