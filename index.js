

function reverseString(str) {

//     return  str
//         .split('')
//         .reverse()
//         .join('');
// 

///////////////////////////////

// let revString = '';
// for(let i = str.length - 1; i >= 0; i--) {
//     revString = revString + str[i];
// }
// return revString;

////////////////////////////////

// let revString = '';
// for(let i = 0; i <= str.length - 1; i++) {
//     revString = str[i] + revString;
// }
// return revString;


///////////////////////////////////

// let revString = '';
// for(let i of str) {
//     revString = i + revString;
// }
// return revString;

////////////////////////////////////

// let revString = '';
// str.split('').forEach(char => revString = char + revString);

// return revString;

/////////////////////////////////////


return str.split('').reduce((revString, char) => char + revString, '');
}

function isPalindrome(str) {
    const revString = str.split('').reverse().join('');

 return revString === str;
}





function reverseInt(int) {
    const revString = int.toString().split('').reverse().join('')

    return parseInt(revString) * Math.sign(int);
}


function capitalizeLetters(str) {
    // const strArr = str.toLowerCase().split(' ');

    // for (let i = 0; i < strArr.length; i++)  {
    //     strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
    // }

    // return strArr.join(' ');

    ///////////////////////////////

    // return str
    // .toLowerCase()
    // .split(' ')
    // .map(word => word[0].toUpperCase() + word.substr(1))
    // .join(' ');

    /////////////////////////////////

    return str.replace(/\b[a-z]/gi, function(char) {
        return char.toUpperCase();
    });
}

function maxCharacter(str) {
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';

    str.split('').forEach(function(char) {
        if(charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    });

    for(let char in charMap) {
        //debugger;
        if(charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

function fizzBuzz() {
    for(let i = 1; i <= 100; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }

}


const output = fizzBuzz();

console.log(output);