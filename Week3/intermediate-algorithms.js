// Intermediate Algorithm Scripting: Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
  const sumHelper = num => (num * (num + 1)) / 2;
  const sortedArr = [...arr].sort((a, b) => b - a);
  const biggerNum = sortedArr[0];
  const smallerNum = sortedArr[1];
  return sumHelper(biggerNum) - sumHelper(smallerNum - 1);
}

console.log(sumAll([1, 4]));

// Intermediate Algorithm Scripting: Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note
// You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
  var newArr = [];
  for (let i of arr1) {
    if (!arr2.includes(i)) {
      newArr.push(i);
    }
  }
  for (let i of arr2) {
    if (!arr1.includes(i)) {
      newArr.push(i);
    }
  }
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// Intermediate Algorithm Scripting: Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.

function destroyer(arr) {
  const elementsToDestroy = Object.values(arguments).slice(1);
  const remains = [];
  for (let i of arr) {
    if (!elementsToDestroy.includes(i)) {
      remains.push(i);
    }
  }
  return remains;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// Intermediate Algorithm Scripting: Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  collection.forEach(obj => {
    let check = true;
    for (let key in source) {
      if (obj[key] !== source[key]) {
        check = false;
      }
    }
    if (check) {
      arr.push(obj);
    }
  });
  // Only change code above this line
  return arr;
}

console.log(
  whatIsInAName(
    [
      { first: 'Romeo', last: 'Montague' },
      { first: 'Mercutio', last: null },
      { first: 'Tybalt', last: 'Capulet' },
    ],
    { last: 'Capulet' }
  )
);

// Intermediate Algorithm Scripting: Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  return str
    .replace(/[a-z][A-Z]/g, char => char[0] + ' ' + char[1])
    .replace(/[(\W)_]/g, ' ')
    .split(' ')
    .join('-')
    .toLowerCase();
}

console.log(spinalCase('The_Andy_Griffith_Show'));
