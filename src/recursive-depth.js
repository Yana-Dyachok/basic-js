const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;
    const calculate = (arr, currentDepth) => {
      if (Array.isArray(arr)) {
        maxDepth = Math.max(maxDepth, currentDepth + 1);
        arr.forEach(item => calculate(item, currentDepth + 1));
      }
    }
    calculate(arr, 1);
    return maxDepth;
  }
}


module.exports = {
  DepthCalculator
};
