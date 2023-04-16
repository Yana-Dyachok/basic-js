const { NotImplementedError } = require('../extensions/index.js');

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
  if (!("separator" in options)) options.separator='+'
  if (!("additionSeparator" in options)) options.additionSeparator='|'
  let additions=''
  if ("addition" in options){
  additions=(options.addition+optionsdditionSeparator).repeat(options.additionRepeatTimes-1)+options.addition;}
  else {additions=options.additionSeparator.repeat(options.additionRepeatTimes-1)}
  return ((str+additions)+options.separator).repeat(options.repeatTimes-1)+(str+additions)
}

module.exports = {
  repeater
};
