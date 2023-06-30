// Return median of two sorted arrays of the same size

const findMedianSortedArrays = function (arr1, arr2) {
    const combinedArray = arr1.concat(arr2);
    const sortedArray = combinedArray.sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedArray.length / 2);

    return sortedArray.length % 2 === 0
        ? (sortedArray[middleIndex] + sortedArray[middleIndex - 1]) / 2
        : sortedArray[middleIndex];
}

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
const median = findMedianSortedArrays(arr1, arr2);
console.log(median);