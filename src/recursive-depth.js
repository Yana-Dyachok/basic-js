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
  calculateDepth(arr, depth = 1) {
    if (!Array.isArray(arr)) {
      return depth;
    }
    let maxDepth = depth;
    for (let i = 0; i < arr.length; i++) {
      const currentDepth = this.calculateDepth(arr[i], depth + 1);
      if (currentDepth > maxDepth) {
        maxDepth = currentDepth;
      }
    }
    return maxDepth;
  }
}



module.exports = {
  DepthCalculator
};
