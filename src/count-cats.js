const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let result = 0
  matrix.forEach(element => {
    element.forEach(function (item) {
      if (item ==='^^') {
        result++
      }
    })
  });
  return result
}

module.exports = {
  countCats
};


// npm run test test/count-cats.test.js