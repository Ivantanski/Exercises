function countZeroes(arr) {
    // Function to find the index of the first occurrence of 0 using binary search
    function findFirstZero(arr) {
        let low = 0;
        let high = arr.length - 1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] === 0) {
                if (mid === 0 || arr[mid - 1] === 1) {
                    return mid;
                } else {
                    high = mid - 1;
                }
            } else {
                low = mid + 1;
            }
        }

        return -1; // return -1 if no zero is found
    }

    // Find the first occurrence of 0
    const firstZeroIndex = findFirstZero(arr);

    // If there are no zeroes in the array, return 0
    if (firstZeroIndex === -1) {
        return 0;
    }

    // Number of zeroes is the total length of the array minus the index of the first 0
    return arr.length - firstZeroIndex;
}

// Test cases
console.log(countZeroes([1, 1, 1, 1, 0, 0]));  // Output: 2
console.log(countZeroes([1, 0, 0, 0, 0]));    // Output: 4
console.log(countZeroes([0, 0, 0]));          // Output: 3
console.log(countZeroes([1, 1, 1, 1]));       // Output: 0
