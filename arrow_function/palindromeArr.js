// Return all the palindromes in an array

const isPalindrome = (word) => {
    const str = String(word).toLowerCase();
    let i = 0;
    let j = str.length - 1;

    // Comparing letters from both end of the string to check if there is a mismatch
    while (i < j) {
        if (str[i] === str[j]) {
            i++;
            j--;
        }
        else {
            return false;
        }
    }
    return true;
};

const findPalindrome = (arr) => {
    return arr
        .filter(function (word) {
            // Return if the word is a Palindrome
            return isPalindrome(word);
        });
};

const arr = ["raceCar", 1344, 12321, "cool", "did", "Malayalam"];
console.log(findPalindrome(arr));