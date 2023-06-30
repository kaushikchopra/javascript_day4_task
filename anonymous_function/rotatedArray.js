// Rotate an array by k times

const rotateArray = function (arr, k) {
    const n = arr.length;
    const rotations = k % n; // handle cases where k is larger than array length

    // Rotate the array by splitting it into two parts and concatenating them in reverse order
    const rotatedArray = arr.slice(rotations).concat(arr.slice(0, rotations));

    return rotatedArray;
}

// Example usage:
const array = [1, 2, 3, 4, 5];
const k = 2;
const rotatedArray = rotateArray(array, k);
console.log(rotatedArray);