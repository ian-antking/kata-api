const negate = (a) => {
  // your code here
  return !a;
};

const both = (a, b) => {
  // your code here
  return a && b;
};

const either = (a, b) => {
  // your code here
  return a || b;
};

const none = (a, b) => {
  // your code here
  return !a && !b;
};

const one = (a, b) => {
  // your code here
  return (a && !b) || (!a && b);
};

const truthiness = (a) => {
  // your code here
  return !!a;
};

const isEqual = (a, b) => {
  // your code here
  return a === b;
};

const isGreaterThan = (a, b) => {
  // your code here
  return a > b;
};

const isLessThanOrEqualTo = (a, b) => {
  // your code here
  return a <= b;
};

const isOdd = (a) => {
  // your code here
  return a % 2 === 1;
};

const isEven = (a) => {
  // your code here
  return a % 2 === 0;
};

const isSquare = (a) => {
  // your code here
  return Math.sqrt(a) % 1 === 0;
};


const startsWith = (char, string) => {
  // your code here
  return string[0] === char;
};

const containsVowels = (string) => {
  // your code here
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const letters = string.toLowerCase().split('');
  let hasVowels = false;
  for (let letter = 0; letter < letters.length; letter++) {
    if (vowels.indexOf(letters[letter]) !== -1) {
      hasVowels = true;
    }
  }
  return hasVowels;
};

const isLowerCase = (string) => {
  // your code here
  return string.toLowerCase() === string;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase,
};
