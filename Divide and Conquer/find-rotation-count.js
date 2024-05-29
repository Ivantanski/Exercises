function findRotationCount(arr) {
    // Helper function to find the index of the smallest element (rotation point)
    function findRotationIndex(arr) {
        let low = 0;
        let high = arr.length - 1;

        // If the array is not rotated, return 0
        if (arr[low] < arr[high]) return 0;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            // Check if mid+1 is the smallest element
            if (arr[mid] > arr[mid + 1]) {
                return mid + 1;
            }
            // Check if mid itself is the smallest element
            if (arr[mid] < arr[mid - 1]) {
                return mid;
            }
            // Adjust search range
            if (arr[mid] > arr[low]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return 0;
    }

    return findRotationIndex(arr);
}

// Test cases
console.log(findRotationCount([15, 18, 2, 3, 6, 12])); // Output: 2
console.log(findRotationCount([7, 9, 11, 12, 5]));     // Output: 4
console.log(findRotationCount([7, 9, 11, 12, 15]));    // Output: 0
