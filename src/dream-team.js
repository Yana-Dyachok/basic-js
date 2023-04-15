const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
// function createDreamTeam( members) {
//     if(!Array.isArray(members)) return false;
//  let array=[]
//  members.forEach(el=>{if(typeof(el)==='string') array.push(el[0])})
//  return array.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('').toUpperCase()
// }

function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  return members
    .map(el => {
      if (typeof el === "string") return el.trim().charAt(0).toUpperCase();
    })
    .filter(el => el !== undefined).sort().join("");
}

module.exports = {
  createDreamTeam
};
