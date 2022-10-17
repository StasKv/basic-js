const { NotImplementedError } = require('../extensions/index.js');

const { CONSTANTS } = require("../extensions");

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

function createDreamTeam(members) {
  if ( Array.isArray(members) == false) {
    return false;
  }
  let onlyNamesArr = members.filter(function (item) {
    if (typeof item == "string") {
      return item;
    }
  });
  let changedArr = onlyNamesArr.map((element) => {
    return element.trimLeft().toLocaleUpperCase();
  });
  changedArr.sort(function (a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  });
  let str = "";
  changedArr.forEach((element) => {
    str += element[0];
  });
  return str;
}


module.exports = {
  createDreamTeam,
};

// npm run test test/dream-team.test.js
