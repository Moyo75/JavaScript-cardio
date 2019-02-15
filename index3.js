// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers
// Ex. addAll(2,5,6,7) === 20


// Solution - ES5 arguments & for loop
// function addAll() {
//     var args = Array.prototype.slice.call(arguments);
//     var total = 0;

//     for (let i = 0; i < args.length; i++) {
//         total += args[i];
//     }
//     return total;
// }

// Solution 2 -- ...rest & reduce/forEach

// function addAll(...numbers) {
//     let total = 0;
//     numbers.forEach(num => total += num)
//     return total;
// }

// With reduce

// function addAll(...numbers) {
//     return numbers.reduce((a, b) => a + b)
// }

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
//ex. sumAllPrimes(10) == 17

// function sumAllPrimes(num) {
//     let total = 0;

//     function checkForPrime(i) {
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }

//     for (let i = 2; i <= num; i++) {
//         if (checkForPrime(i)) {
//             total += i;
//         }
//     }
//     return total;
// }

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover value in the array
// Ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

// Solution 1: arguments, indexOf, filter

// function seekAndDestroy(arr) {
//     const args = Array.from(arguments);

//     function filterArr(arr) {
//         //Return true if NOT in the array
//         return args.indexOf(arr) === -1;
//     }

//     return arr.filter(filterArr)
// }


// Solution 2: ...rest, filter & includes

// function seekAndDestroy(arr, ...rest) {
//     return arr.filter(val => !rest.includes(val));
// }

// CHALLENGE 3: SORT BY HEIGHT

function sortByHeight(a) {
    const arr1 = [];
    const arr2 = [];

    a.forEach((val, i) => {
        if (val === -1) {
            arr1.push(i)
        } else {
            arr2.push(val)
        }
    });

    const sortArr = arr2.sort((a, b) => a - b);

    arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1))

    return sortArr;
}

const a = [-1, 150, 190, 170, -1, -1, 160, 180]
console.log(sortByHeight(a))