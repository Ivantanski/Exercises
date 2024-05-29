function findFloor(arr, x) {
    let low = 0;
    let high = arr.length - 1;
    let floor = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === x) {
            return arr[mid];  // If we find x, it is the floor
        } else if (arr[mid] < x) {
            floor = arr[mid];  // Update floor
            low = mid + 1;     // Search the right half
        } else {
            high = mid - 1;    // Search the left half
        }
    }

    return floor;
}

// Test cases
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 9));  // Output: 8
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 20)); // Output: 19
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 0));  // Output: -1
