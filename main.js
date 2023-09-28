//exercise 1
console.log("-----exercise 1------");

let myName = "can";
console.log(myName);

//exercise 2
console.log("-----exercise 2------");

let age = 39;
console.log(age);

//exercise 3
console.log("-----exercise 3------");

let juliaAge = 32;
const ageDiff = age - juliaAge;
console.log(ageDiff);

//exercise 4
console.log("-----exercise 4------");

if (age > 21) {
  console.log("You are older than 21");
} else {
  console.log("You are not older than 21");
}

//exercise 5
console.log("-----exercise 5------");

if (age > juliaAge) {
  console.log("Julia is younger than you");
} else if (age == juliaAge) {
  console.log("You have the same age as Julia");
}
if (age < juliaAge) {
  console.log("Julia is older than you");
}

//exercise 6
console.log("-----exercise 6------");

let myClassNames = [
  "Can",
  "Juli",
  "Santiago",
  "Olja",
  "Ercan",
  "Monique",
  "Roxanne",
  "Raul",
];
myClassNames.sort();
console.log(myClassNames[0]);
console.log(myClassNames[7]);

for (let i = 0; i < myClassNames.length; i++) {
  console.log(myClassNames[i]);
}
//exercise 7
console.log("-----exercise 7------");

let myClassAges = [
  { name: "Can", age: 39 },
  { name: "Juli", age: 24 },
  { name: "Santiago", age: 32 },
  { name: "Olja", age: 36 },
  { name: "Ercan", age: 51 },
  { name: "Monique", age: 30 },
  { name: "Roxanne", age: 29 },
  { name: "Raul", age: 46 },
];

let i = 0;
while (i < myClassAges.length) {
  console.log(myClassAges[i].name, "is", myClassAges[i].age, "years old.");
  i++;
}
console.log("while loop:");
//while loop
let j = 0;
while (j < myClassAges.length) {
  if (myClassAges[j].age % 2 == 0) {
    console.log(
      myClassAges[j].name,
      "'s age is",
      myClassAges[j].age,
      "and it is an EVEN number!"
    );
  } else {
    console.log(
      myClassAges[j].name,
      "'s age is",
      myClassAges[j].age,
      "and it is an ODD number!"
    );
  }
  j++;
}
console.log("for loop:");
//for loop
for (let k = 0; k < myClassAges.length; k++) {
  if (myClassAges[k].age % 2 == 0) {
    console.log(
      myClassAges[k].name,
      "'s age is",
      myClassAges[k].age,
      "and it is an EVEN number!"
    );
  } else {
    console.log(
      myClassAges[k].name,
      "'s age is",
      myClassAges[k].age,
      "and it is an ODD number!"
    );
  }
}

//exercise 8
console.log("-----exercise 8------");

function least_number(myClassAges) {
  let lowestAge = 100; //highest possible age

  for (let x = 0; x < myClassAges.length; x++) {
    //comparison age vs 100
    if (myClassAges[x].age < lowestAge) {
      lowestAge = myClassAges[x].age; //storage in lowest age
    }
  }
  return lowestAge;
}
console.log("Lowest age is:" + " " + least_number(myClassAges));

//exercise 9
console.log("-----exercise 9------");

let highestAge = 0; //lowest possible age
function highest_number(myClassAges) {
  for (let x = 0; x < myClassAges.length; x++) {
    //comparison age vs 0
    if (myClassAges[x].age > highestAge) {
      highestAge = myClassAges[x].age; //storage in lowest age
    }
  }
  return highestAge;
}
console.log("Highest age is:" + " " + highest_number(myClassAges));

//exercise 10
console.log("-----exercise 10------");
const indexNumber = 5;
const numberArray = [
  25, 183, 1, 6, 84, 41, 2, 1, 407, 6, 643, 1, 25, 33, 9, 72,
];
function positionOfAnElement(arrayOfNumbers, indexNumber) {
  indexNumber = 5;
  let position = arrayOfNumbers[indexNumber];
  return position;
}
let indexNumberPlusOne = indexNumber + 1;
console.log(
  indexNumberPlusOne +
    "th element of the array is " +
    positionOfAnElement(numberArray)
);

//exercise 11
console.log("-----exercise 11------");
console.log("solution 1:");
//solution 1:
function count_duplicate(numberArray) {
  let counts = {};

  for (let i = 0; i < numberArray.length; i++) {
    if (counts[numberArray[i]]) {
      counts[numberArray[i]] += 1;
    } else {
      counts[numberArray[i]] = 1;
    }
  }
  for (let prop in counts) {
    if (counts[prop] >= 2) {
      console.log(prop);
    }
  }
}
count_duplicate(numberArray);
//solution 2:
console.log("solution 2:");
function find_duplicate_in_array(arra1) {
  var object = {};
  var result = [];

  arra1.forEach(function (item) {
    if (!object[item]) object[item] = 0;
    object[item] += 1;
  });

  for (var prop in object) {
    if (object[prop] >= 2) {
      result.push(prop);
    }
  }

  return result;
}
console.log("Repeated numbers are " + find_duplicate_in_array(numberArray));
//solution3:
console.log("solution 3:");
function findDublicatesNumbersFromArray(numberArray) {
  var d = [];
  for (let i = 0; i < numberArray.length; i++) {
    var ct = numberArray[i];
    var cmt = 0;
    for (var x = 0; x < numberArray.length; ++x) {
      if (ct === numberArray[x]) {
        cmt++;
        if (cmt > 1) {
          d.push(numberArray[i]);
        }
      }
    }
  }
  return d.filter((i, ix) => d.indexOf(i) === ix);
}

console.log("Repeated numbers: " + findDublicatesNumbersFromArray(numberArray));

//exercise 12
console.log("-----exercise 12------");

let colors = ["Red", "Green", "White", "Black"];

function combiningAnArray(colorArray) {
  let combinedColors = colorArray.join(", ");
  return combinedColors;
}

console.log(combiningAnArray(colors));

//exercise 13
console.log("-----exercise 13------");
const randomNumber = 123456789;
function reversedNum(randomNumber) {
  let reversed = parseFloat(
    randomNumber.toString().split("").reverse().join("")
  );
  return reversed;
}

console.log(
  "Reversed version of " + randomNumber + " is " + reversedNum(randomNumber)
);

//exercise 14
console.log("-----exercise 14------");

function returnStringIntoAlphabet(str) {
  var arr = str.split(""),
    order = arr.sort().join("").replace(/\s+/g, "");
  return order;
}
console.log(
  "Alphabetical order of the letters in 'Hello World' is: " +
    returnStringIntoAlphabet("Hello World")
);

//exercise 15
console.log("-----exercise 15------");

function capitalizeFirstLetters(phrase) {
  return phrase
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(
  capitalizeFirstLetters("first letters of this sentence are uppercase")
);

//exercise 16
console.log("-----exercise 16------");

function findLongestWord(str) {
  var strSplit = str.split(" ");
  var longestWord = 0;
  for (var i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
      longestWord = strSplit[i].length;
      word = strSplit[i];
    }
  }
  return word; //In order to get two values from a function, we can create an array:
  //return [word, longestWord];
}
console.log(
  "Longest word: " +
    findLongestWord("When life gives you lemons, make lemonade")
);

//exercise 17 DOM
console.log("-----exercise 17-(DOM)------");

function addBands(arr) {
  let getUl = document.getElementById("band-list");
  for (let i = 0; i < arr.length; i++) {
    let listViewItem = document.createElement("li");
    listViewItem.appendChild(document.createTextNode(arr[i]));
    getUl.appendChild(listViewItem);
    document.innerHTML = "li";
  }
  return getUl;
}
console.log(
  addBands(["Depeche Mode", "Pet Shop Boys", "The Smiths", "Kraftwerk"])
);

//exercise 18 DOM
console.log("-----exercise 18-(DOM)------");

function addMultTable(rows, cols) {
  let div = document.getElementById("tableLocation");
  let tbl = document.createElement("table");
  tbl.style.width = "500px";
  tbl.style.border = "2px solid black";

  for (let i = 0; i < rows; i++) {
    let tr = tbl.insertRow();
    for (let j = 0; j < cols; j++) {
      let td = tr.insertCell();
      td.appendChild(document.createTextNode([i] + [j]));
      td.style.border = "1px solid black";
    }
  }
  div.appendChild(tbl);
}

addMultTable(10, 5);
console.log("<<< Look left. Table is done!");

//exercise 19
console.log("-----exercise 19------");

function multiplyNumbers1() {
  console.log(9 * 2);
}

multiplyNumbers1();

//exercise 20
console.log("-----exercise 20------");

function multiplyNumbers2() {
  let x = 4 * 5;
  return x;
}

console.log(multiplyNumbers2());

//exercise 21
console.log("-----exercise 21------");

function multiplyNumbers3(x, y) {
  return x * y;
}

console.log(multiplyNumbers3(8, 9));
console.log(multiplyNumbers3(17, 20));
console.log(multiplyNumbers3(5, 11));

//exercise 22
// sort an array of string alphabetically
console.log("-----exercise 22------");

function sortArray(arr) {
  let stringArray = arr.sort();

  return stringArray;
}
console.log(sortArray(["orange", "apple", "kiwi", "banana"]));

//exercise 23
// split a word into letters and sort alphabetically
console.log("-----exercise 23------");

function sortString(arr) {
  let string = arr.split("");
  string = string.sort();

  return string;
}

console.log(sortString("orange"));

//exercise 24
// show a key of an object
console.log("-----exercise 24------");

function showKey(obj, key) {
  return obj[key];
}

console.log(showKey({ name: "Can", city: "Berlin" }, "city"));

// exercise 25
// calculate the sum of an array of numbers
console.log("-----exercise 25------");

function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}
console.log(calculateSum([2, 6, 11, 100]));

// exercise 26
// capitalize first letter of a string
console.log("-----exercise 26------");

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizeFirstLetter("apple"));

// exercise 27
// check if a number is even or odd
console.log("-----exercise 27------");

function checkEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkEvenOrOdd(17));

// exercise 28
// get a random number between two numbers
console.log("-----exercise 28------");

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generateRandomNumber(1, 12));

// exercise 29
// reverse a string
console.log("-----exercise 29------");

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("berlin"));

// exercise 30
// check if a string is plaindrome
console.log("-----exercise 30------");

function isPlaindrome(str) {
  let reverse = str.split("").reverse().join("");
  if (reverse === str) {
    return true;
  } else {
    return false;
  }
}

console.log(isPlaindrome("level"));

// exercise 31
// find the biggest number in an array of numbers
console.log("-----exercise 31------");

function findBiggestNumber(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findBiggestNumber([4, 19, 20, 22, 1, 17, 5]));

// exercise 32
// remove dublicates in an array of numbers
console.log("-----exercise 32------");

function removeDublicates(arr) {
  return Array.from(new Set(arr));
}

console.log(removeDublicates([11, 4, 9, 4, 15, 11, 7]));

// exercise 33
// sort numbers in an array from min to max
console.log("-----exercise 33------");

function sortMinToMax(nums) {
  nums.sort(function (a, b) {
    return a - b;
  });
  return nums;
}

console.log(sortMinToMax([3, 28, 2, 5, 11]));

// exercise 34
// find the median in an array of numbers
console.log("-----exercise 34------");

function findMedian(arr) {
  let arrSum = 0;
  for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i];
  }
  let decimalMedian = arrSum / arr.length;

  let closestValue = 0;
  for (let i = 1; i < arr.length; i++) {
    if (
      Math.abs(arr[i] - decimalMedian) < Math.abs(closestValue - decimalMedian)
    ) {
      closestValue = arr[i];
    }
  }
  return closestValue;
}

console.log(findMedian([1, 4, 7, 8, 24, 99]));

// exercise 35
// find unique elements in an array
console.log("-----exercise 35------");

function findUniqueElement(arr) {
  let uniqueElements = [];

  for (let i = 0; i < arr.length; i++) {
    let currentNumber = arr[i];

    if (arr.indexOf(currentNumber) === arr.lastIndexOf(currentNumber)) {
      uniqueElements.push(currentNumber);
    }
  }

  return uniqueElements;
}
console.log(findUniqueElement([1, 1, 2, 2, 3, 4, 4, 5]));

// exercise 36
// find the ratios of an array's elements that are positive, negative, and zero, with max 3 digits after the decimal.
console.log("-----exercise 36------");

function plusMinus(arr) {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveCount++;
    } else if (arr[i] < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  }

  const total = arr.length;
  const ratioPositive = positiveCount / total;
  const ratioNegative = negativeCount / total;
  const ratioZero = zeroCount / total;

  console.log("positive:", ratioPositive.toFixed(3));
  console.log("negative:", ratioNegative.toFixed(3));
  console.log("zero:", ratioZero.toFixed(3));
}

const arrNumber = [-1, 2, -3, 0, 1, 3, 5];

plusMinus(arrNumber);
