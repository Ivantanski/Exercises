/** product: calculate the product of an array of numbers. */

function product(nums) {
  function helper(idx) {
    if (idx === nums.length) return 1;
    return nums[idx] * helper(idx + 1);
  }
  return helper(0);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  function helper(idx, longestSoFar) {
    if (idx === words.length) return longestSoFar;
    longestSoFar = Math.max(words[idx].length, longestSoFar);
    return helper(idx + 1, longestSoFar);
  }
  return helper(0, 0);
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  function helper(idx, newStr) {
    if (idx >= str.length) return newStr;
    newStr += str[idx];
    return helper(idx + 2, newStr);
  }
  return helper(0, "");
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  function helper(idx) {
    let leftIdx = idx;
    let rightIdx = str.length - idx - 1;
    if (leftIdx >= rightIdx) return true;
    if (str[leftIdx] !== str[rightIdx]) return false;
    return helper(idx + 1);
  }
  return helper(0);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  function helper(idx) {
    if (idx === arr.length) return -1;
    if (arr[idx] === val) return idx;
    return helper(idx + 1);
  }
  return helper(0);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  function helper(idx, newStr) {
    if (newStr.length === str.length) return newStr;
    newStr += str[str.length - 1 - idx];
    return helper(idx + 1, newStr);
  }
  return helper(0, "");
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  function helper(o) {
    for (let key in o) {
      if (typeof o[key] === "string") stringArr.push(o[key]);
      if (typeof o[key] === "object") helper(o[key]);
    }
  }
  helper(obj);
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  function helper(left, right) {
    if (left > right) return -1;
    let middle = Math.floor((right + left) / 2);
    if (arr[middle] === val) return middle;
    if (arr[middle] > val) return helper(left, middle - 1);
    return helper(middle + 1, right);
  }
  return helper(0, arr.length - 1);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
