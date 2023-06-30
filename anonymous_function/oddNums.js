// Print odd numbers in an array

const oddNums = function (num) {
    return (num + 1) % 2 === 0;
}

console.log(oddNums(5));
console.log(oddNums(379));
console.log(oddNums(56));