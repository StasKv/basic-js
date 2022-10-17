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

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let array =[]
  arr.forEach(function(item){
    array.push(item)
  });

  if (arr[0] === '--discard-prev' || arr[0] === '--double-prev') {
    array.shift()
  }

  if (arr[arr.length-1] === '--double-next' || arr[arr.length-1] === '--discard-next') {
    array.pop()
  }

  if (arr.indexOf('--discard-next') == arr.indexOf('--double-prev') - 2 ){ 
    array.splice(arr.indexOf('--double-prev'), 1)
  }

  if(arr.indexOf('--discard-next') == arr.indexOf('--discard-prev') - 2) {
    array.splice(arr.indexOf('--discard-prev'), 1)
  }
  
  let result = array;
  array.forEach(function (item, index, array) {
    if (item === '--discard-prev') {
      result.splice(index - 1, 2)
    }
    if (item === '--discard-next') {
      result.splice(index, 2)
    }
    if (item === '--double-prev') {
      result.splice(index, 1)
      result.splice(index - 1, 0, array[index - 1])
    }
    if (item === '--double-next') {
      result.splice(index, 1)
      result.splice(index, 0, array[index])
    }
  })
  return result
}


module.exports = {
  transform
};


// npm run test test/transform-array.test.js