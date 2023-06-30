// Convert all the strings to title caps in a string array

const str = function (text) {
    return text
        .toLowerCase()
        .split(' ')
        .map(function (word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        })
        .join(' ');
}

console.log(str("hello"));
console.log(str("hi! This is Kaushik."));