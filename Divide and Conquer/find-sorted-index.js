function findRotatedIndex(arr, num) {
    // Helper function to find the index of the smallest element (rotation point)
    function findRotationIndex(arr) {
        let low = 0;
        let high = arr.length - 1;

        if (arr[low] < arr[high]) return 0; // The array is not rotated

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] > arr[mid + 1]) {
                return mid + 1;
            } else if (arr[mid] < arr[low]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return 0;
    }

    // Helper function for binary search
    function binarySearch(arr, low, high, num) {
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] === num) {
                return mid;
            } else if (arr[mid] < num) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return -1;
    }

    const rotationIndex = findRotationIndex(arr);

    // If the target is the smallest element
    if (arr[rotationIndex] === num) {
        return rotationIndex;
    }

    // Determine which part of the array to search
    if (rotationIndex === 0 || num < arr[0]) {
        return binarySearch(arr, rotationIndex, arr.length - 1, num);
    } else {
        return binarySearch(arr, 0, rotationIndex - 1, num);
    }
}

// Test cases
console.log(findRotatedIndex([3, 4, 1, 2], 4)); // Output: 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // Output: 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // Output: 6
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // Output: -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // Output: -1
