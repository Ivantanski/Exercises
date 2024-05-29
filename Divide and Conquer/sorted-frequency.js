function sortedFrequency(arr, num) {
    // Helper function to find the first occurrence of num
    function findFirst(arr, num) {
        let low = 0;
        let high = arr.length - 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] === num) {
                if (mid === 0 || arr[mid - 1] < num) {
                    return mid;
                } else {
                    high = mid - 1;
                }
            } else if (arr[mid] < num) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return -1;
    }

    // Helper function to find the last occurrence of num
    function findLast(arr, num) {
        let low = 0;
        let high = arr.length - 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] === num) {
                if (mid === arr.length - 1 || arr[mid + 1] > num) {
                    return mid;
                } else {
                    low = mid + 1;
                }
            } else if (arr[mid] < num) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return -1;
    }

    // Find the first and last occurrences of num
    const firstIndex = findFirst(arr, num);
    const lastIndex = findLast(arr, num);

    // If num is not present in the array, return -1
    if (firstIndex === -1 || lastIndex === -1) {
        return -1;
    }

    // Return the count of occurrences
    return lastIndex - firstIndex + 1;
}

// Test cases
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // Output: 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // Output: 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // Output: 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // Output: -1
