const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
function encodeLine(str) {
  let res = '';
  let count = 1;
  let currentChar = str[0];
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === currentChar)count++;
    else {
      res += count === 1 ? currentChar : count + currentChar;
      count = 1;
      currentChar = str[i];
    }
  }
  return res;
}
}

module.exports = {
  encodeLine
};
