//  1 Basic Algorithm Scripting: Convert Celsius to Fahrenheit
//    The algorithm to convert from Celsius to Fahrenheit is
//    the temperature in Celsius times 9/5, plus 32.

//    You are given a variable celsius representing a temperature
//    in Celsius. Use the variable fahrenheit already defined and
//    assign it the Fahrenheit temperature equivalent to the given
//    Celsius temperature. Use the algorithm mentioned above to help
//    convert the Celsius temperature to Fahrenheit.

function convertToF(celsius) {
  return (celsius * 9) / 5 + 32;
}

convertToF(30);

//  2 Basic Algorithm Scripting: Reverse a String
//    Reverse the provided string.

//    You may need to turn the string into an array before you can reverse it.
//    Your result must be a string.

function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString('hello');

//  3 Basic Algorithm Scripting: Factorialize a Number
//    Return the factorial of the provided integer.

//    If the integer is represented with the letter n, a factorial
//    is the product of all positive integers less than or equal to n.
//    Factorials are often represented with the shorthand notation n!
//    For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
//    Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
  if (num === 0) return 1;
  return num * factorialize(num - 1);
}

factorialize(5);

//  4 Basic Algorithm Scripting: Find the Longest Word in a String
//    Return the length of the longest word in the provided sentence.
//    Your response should be a number.

const findLongestWordLength = str =>
  str.split(' ').sort((a, b) => (a.length > b.length ? -1 : 1))[0].length;

findLongestWordLength('The quick brown fox jumped over the lazy dog');

//  5 Basic Algorithm Scripting: Return Largest Numbers in Arrays
//    Return an array consisting of the largest number from each provided
//    sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
//
//    Remember, you can iterate through an array with a simple for loop,
//    and access each member with array syntax arr[i].

function largestOfFour(arr) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i].sort((a, b) => (a < b ? 1 : -1))[0]);
  }
  return newArray;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

//  6 Basic Algorithm Scripting: Confirm the Ending
//    Check if a string (first argument, str) ends with the given
//    target string (second argument, target).
//
//    This challenge can be solved with the .endsWith() method,
//    which was introduced in ES2015. But for the purpose of
//    this challenge, we would like you to use one of the
//    JavaScript substring methods instead.

function confirmEnding(str, target) {
  return str.slice(target.length * -1) === target;
}

confirmEnding('Bastian', 'n');

//  7 Basic Algorithm Scripting: Repeat a String Repeat a String
//    Repeat a given string str (first argument) for num times
//    (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  let newStr = '';
  for (let i = num; i > 0; i--) {
    newStr += str;
  }
  return newStr;
}

repeatStringNumTimes('abc', 3);

//  8 Basic Algorithm Scripting: Truncate a String
//    Truncate a string (first argument) if it is longer
//    than the given maximum string length (second argument).
//    Return the truncated string with a ... ending.

function truncateString(str, num) {
  return str.slice(0, num) + (str.length > num ? '...' : '');
}

truncateString('A-tisket a-tasket A green and yellow basket', 8);

//  9 Basic Algorithm Scripting: Finders Keepers
//    Create a function that looks through an array
//    (first argument) and returns the first element
//    in the array that passes a truth test (second argument).
//    If no element passes the test, return undefined.

function findElement(arr, func) {
  return arr.filter(elem => func(elem))[0];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

// 10 Basic Algorithm Scripting: Boo who
//    Check if a value is classified as a boolean
//    primitive. Return true or false.
//
//    Boolean primitives are true and false.

function booWho(bool) {
  return typeof bool === 'boolean';
}

booWho(null);

// 11 Basic Algorithm Scripting: Title Case a Sentence
//    Return the provided string with the first letter of
//    each word capitalized. Make sure the rest of the word is in lower case.
//
//    For the purpose of this exercise, you should also
//    capitalize connecting words like "the" and "of".

function titleCase(str) {
  const wordsArr = [];
  str
    .toLowerCase()
    .split(' ')
    .map(elem => {
      wordsArr.push(elem[0].toUpperCase() + elem.slice(1));
    });
  return wordsArr.join(' ');
}

titleCase("I'm a little tea pot");

// 12 Basic Algorithm Scripting: Slice and Splice
//    You are given two arrays and an index.
//
//    Use the array methods slice and splice to copy each
//    element of the first array into the second array, in order.
//    Begin inserting elements at index n of the second array.
//    Return the resulting array. The input arrays should
//    remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  const newArr = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    newArr.splice(n + i, 0, arr1[i]);
  }
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// 13 Basic Algorithm Scripting: Falsy BouncerPassed
//    Remove all falsy values from an array.
//
//    Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
//    Hint: Try converting each value to a Boolean.

const bouncer = arr => arr.filter(elem => elem);

bouncer([7, 'ate', '', false, 9]);

// 14 Basic Algorithm Scripting: Where do I Belong
//    Return the lowest index at which a value (second argument)
//    should be inserted into an array (first argument) once it
//    has been sorted. The returned value should be a number.
//
//    For example, getIndexToIns([1,2,3,4], 1.5) should return 1
//    because it is greater than 1 (index 0), but less than 2 (index 1).
//
//    Likewise, getIndexToIns([20,3,5], 19) should return 2
//    because once the array has been sorted it will look like
//    [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
  arr.push(num);
  return arr.sort((a, b) => (a < b ? -1 : 1)).indexOf(num);
}

getIndexToIns([40, 60], 50);

// 15 Basic Algorithm Scripting: Mutations
//    Return true if the string in the first element of
//    the array contains all of the letters of the string
//    in the second element of the array.
//
//    For example, ["hello", "Hello"], should return true
//    because all of the letters in the second string are
//    present in the first, ignoring case.
//
//    The arguments ["hello", "hey"] should return false
//    because the string "hello" does not contain a "y".
//
//    Lastly, ["Alien", "line"], should return true because
//    all of the letters in "line" are present in "Alien".

function mutation(arr) {
  const firstWord = arr[0].toLowerCase();
  const secondWord = arr[1].toLowerCase();
  for (let i = 0; i < secondWord.length; i++) {
    if (!firstWord.includes(secondWord[i])) {
      return false;
    }
  }
  return true;
}

mutation(['hello', 'hey']);

// 16 Basic Algorithm Scripting: Chunky MonkeyPassed
//    Write a function that splits an array (first argument)
//    into groups the length of size (second argument) and
//    returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  const newArr = [];
  for (let i = 0; i < arr.length / size; i++) {
    newArr.push(arr.slice(i * size, (i + 1) * size));
  }
  return newArr;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);

///////////////// FEEDBACK /////////////////

// Q5. You can make use of `map` function here and avoid using a for loop and creating an extra temporary variable. Also, you need not do a ternary check for sort function in this case as you can simply return the value of the subtraction and let sort function determine the order. :)
function largestOfFour(arr) {
  return arr.map(subArr => subArr.sort((a, b) => b - a)[0]);
}
// Q7.Try to use this method instead and then you won't need a for loop - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
// Q9.Try to use this method instead and then you won't need a filter operation and get 0th element - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// Q11. You don't need an extra `wordsArr` variable here as you can use `map` to your advantage :)
function titleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
// Q14. I don't think you are required to push the number to be tested to the array. You only need to find the index where it should belong to. I think after sorting the array, you need to use the `findIndex` method to achieve this behaviour. Also, try to make use of spread operator before sorting as `sort` is a mutable method. We don't want to alter the arr argument, do we? ;)
// Q15. A small comment on otherwise correct logic. I think it would be nice if we could remove duplicates from the second string(check how we can use Sets for that) before checking the logic inside a for loop. For example, if the second word is "hello", we don't want to test letter 'l' twice, right? :)
