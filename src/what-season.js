const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (typeof(date) == `undefined` ) return  'Unable to determine the time of year!'
       try { date.getTime() } catch { throw new Error(`Invalid date!`) } 
let month=date.getMonth();
return month>1&&month<5?'spring':month>4&&month<8?'summer':month>7&&month<11?'autumn':month<2&&month===11?'winter':'Unable to determine the time of year!'
}

module.exports = {
  getSeason
};
