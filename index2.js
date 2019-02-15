
function strReversal(str) {

    // return str.split('').reverse().join('')

    //////////////////////////////////////////////

    // let revString = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     revString = revString + str[i];
    // }
    // return revString;

    ///////////////////////////////////////////////

    // let revString = '';
    // for (let i = 0; i < str.length; i++) {
    //     revString = str[i] + revString;
    // }
    // return revString;

    ////////////////////////////////////////////////

    // let revString = '';
    // for (let letter of str) {
    //     revString = letter + revString;
    // }
    // return revString;

    ////////////////////////////////////////////////

    // let revString = '';
    // str.split('').forEach(element => revString = element + revString);
    // // return revString;

    /////////////////////////////////////////////////

    return str.split('').reduce(function(revString, char) {
        return char + revString;
    }, '')



}


function Palindrome(str) {
    const revString = str.split('').reverse().join('');

    return revString === str;
}

function reverseInt (int) {
    return parseInt(int.toString().split('').reverse().join('')) * Math.sign(int);

}

function capitalize(str) {
    // const strArr = str.toLowerCase().split(' ');

    // for (let i = 0; i < strArr.length; i++) {
    //     strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
    // }

    // return strArr.join(' ');

    //////////////////////////////////////////////////////

    // return str 
    //     .toLowerCase()
    //     .split(' ')
    //     .map(word => word[0].toUpperCase() + word.substring(1))
    //     .join(' '); 

    ////////////////////////////////////////////////////////

    // return str.replace(/\b[a-z]/gi, function(char){
    //     return char.toUpperCase();
    // });

    /////////////////////////////////////////////////////////

    const words = []

    for (let word of str.split(" ")) {
        words.push(word[0].toUpperCase() + word.slice(1))
    }

    return words.join(" ");
}


function maxCharacter(str) {
    let max = 0, maxChar = '';

    str.split('').forEach(char => {
        if(str.split(char).length > max) {
            max = str.split(char).length;
            maxChar = char;
        }
    });
    return maxChar;
}

function FizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else  if (i % 5 === 0) {
            console.log("Fizz");
        } else  if (i % 3 === 0) {
            console.log("Buzz");
        }
         else {
            console.log(i);
        }
    }
}

function longestWord(sen) {
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

    // Sort by length
    const sorted = wordArr.sort((a, b) => b.length - a.length)

    const longestWordArr = sorted.filter(word => word.length === sorted[0].length);

    if (longestWordArr.length === 1) {
        return longestWordArr[0];
    } else {
        return longestWordArr;
    }
}


function chunkArray(arr, len) {

    // const chunkedArr = [];
    // let i = 0;
    // while(i < arr.length) {
    //     chunkedArr.push(arr.slice(i, i + len));
    //     i+= len;
    // }
    // return chunkedArr;

    ///////////////////////////////////////////////

    const chunkedArr = [];

    arr.forEach(val => {

        const last = chunkedArr[chunkedArr.length - 1];

        if(!last || last.length === len) {
            chunkedArr.push([val]);
        } else {
            last.push(val);
        }
    });


    return chunkedArr;

}

function flattenArray(arrays) {

    // return arrays.reduce(function(a, b) {
    //     return a.concat(b);
    // });

    ///////////////////////////////////////

    // return [].concat.apply([], arrays);

    ///////////////////////////////////////

    return [].concat(...arrays);
}

function isAnagram(str1, str2) {
    return formatStr(str1) === formatStr(str2);
}

function formatStr(str) {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}

function letterChanges(str) {
    let newStr = str.toLowerCase().replace(/[a-z]/gi, function(char){
        if(char === "z" || char === "Z") {
            return "a";
        } else {
            return String.fromCharCode(char.charCodeAt() + 1);
        }
    });

    newStr = newStr.replace(/a|e|i|o|u/gi, function(vowel) {
        return vowel.toUpperCase();
    });

    return newStr;
}

const output = letterChanges('Hello There');

console.log(output);