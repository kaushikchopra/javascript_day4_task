// Return all the prime numbers in an array

const primeNums = (arr) => {
    let result = [];
    
    for(let i = 0; i < arr.length; i++) {
        
        if(arr[i] === 1 || arr[i] === 0) {
            continue;
        }

        flag = 1;

        //Check if the number is divisible by any other number starting from 2
        for(let j = 2; j <= arr[i]/2; j++) {
            if(arr[i] % j === 0) {
                flag = 0;
                break;
            }
        }

        if(flag) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(primeNums([1, 2, 3, 5, 7, 6, 10, 11, 13, 14, 15, 97]));