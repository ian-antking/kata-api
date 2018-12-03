const getNthElement = (index, array) => {
  // your code here
  return array[(index % array.length)];
};

const arrayToCSVString = (array) => {
  // your code here
  return array.join(',');
};

const csvStringToArray = (string) => {
  // your code here
  return string.split(',');
};

const addToArray = (element, array) => {
  // your code here
  array.push(element);
};

const addToArray2 = (element, array) => {
  // your code here
  const newArray = array.slice();
  newArray.push(element);
  return newArray;
};

const removeNthElement = (index, array) => {
  // your code here
  return array.splice(index, 1);
};

const numbersToStrings = (numbers) => {
  // your code here
  return numbers.map(number => number.toString());
};

const uppercaseWordsInArray = (strings) => {
  // your code here
  return strings.map(word => word.toUpperCase());
};

const reverseWordsInArray = (strings) => {
  // your code here
  return strings.map(string => {
    return string.split('').reverse().join('');
  });
};

const onlyEven = (numbers) => {
  // your code here
  return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  // your code here
  return array.slice(0, index).concat(array.slice(index + 1));
};

const elementsStartingWithAVowel = (strings) => {
  // your code here
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return strings.filter((string) => {
    const start = string[0].toLowerCase();
    return vowels.indexOf(start) !== -1;
  });
};

const removeSpaces = (string) => {
  // your code here
  const letters = string.split('');
  return letters.filter(letter => letter !== ' ').join('');
};

const sumNumbers = (numbers) => {
  // your code here
  return numbers.reduce((a, b) => a + b);
};

const sortByLastLetter = (strings) => {
  // your code here
  function comparitor(a, b) {
    if (a.slice(-1) < b.slice(-1)) return -1;
    if (a.slice(-1) > b.slice(-1)) return 1;
    return 0;
  }
  return strings.sort(comparitor);
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
