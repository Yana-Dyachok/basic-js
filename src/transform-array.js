const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
// function transform(arr) {
//   const sequences = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
//   if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
//   let result = [];
//   let discardNext = false; 
//   for (let i = 0; i < arr.length; i++) {
//     if (discardNext) {
//       discardNext = false;
//       continue; 
//     }
//     if (arr[i] === sequences[0]) {
//       discardNext = true;
//     } else if (arr[i] === sequences[1]) {
//       if (result.length > 0) result.pop();
//     } else if (arr[i] === sequences[2]) {
//       if (i < arr.length - 1) result.push(arr[i + 1]);
//     } else if (arr[i] === sequences[3]) {
//       if (i > 0) result.push(arr[i - 1]);
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    switch (el) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        if (res.length && arr[i - 2] !== '--discard-next') {
          res.pop();
        }
        break;
      case '--double-next':
        if (i < arr.length - 1) {
          res.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        if (i > 0 && arr[i - 2] !== '--discard-next') {
          res.push(arr[i - 1]);
        }
        break;
      default:
        res.push(el);
        break;
    }
  }
  return res;
}

module.exports = {
  transform
};
