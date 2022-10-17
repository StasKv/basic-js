//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let optionsAddition = options.addition? options.addition: '';
  let optionsSeparator = options.separator? options.separator: '+';
  let lengthOfSeparetor = optionsSeparator === '+'?-((str.length + 1)*options.repeatTimes-1 ) : options.separator.length;
  let optionsAdditionSeparator = options.additionSeparator? options.additionSeparator: '|';
  let optionsAdditionRepeatTimes = options.additionRepeatTimes? options.additionRepeatTimes: 0;
  let lengthOfAdditionSeparator = optionsAdditionSeparator === '|'?-((optionsAddition.length + 1)*optionsAdditionRepeatTimes -1 ) : options.additionSeparator.length;

  let str1= '';
  console.log(optionsAddition)
  str1 = (String(optionsAddition) + String(optionsAdditionSeparator)).repeat(options.optionsAdditionRepeatTimes).slice(0,-optionsAdditionSeparator.length)
  let firstPart = str + str1;
  console.log(str1)
  firstPart = (String(firstPart) + String(optionsSeparator)).repeat(options.repeatTimes).slice(0,-lengthOfSeparetor)
  return firstPart
}

//console.log(repeater('la', { repeatTimes: 3, separator: 's', addition: '+', additionRepeatTimes: 1 }))

module.exports = {
  repeater
};

// npm run test test/extended-repeater.test.js