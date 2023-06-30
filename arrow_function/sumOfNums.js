// Sum of all numbers in an array

const sum = (arr) => {
    const total = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return total;
}

console.log(sum([1, 2, 4, 3, 5]));