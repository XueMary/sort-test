const utils = require('../utils')
const { sortRule } = utils

function insertSort(arrs, sort = sortRule) {
  const len = arrs.length
  for (let i = 1; i < len; i++) {
    for (let j = i; j > 0; j--) {
      if (sort(arrs[j], arrs[j - 1])) {
        [arrs[j], arrs[j-1]] = [arrs[j-1], arrs[j]]
      } else {
        break;
      }
    }
  }
}

module.exports = insertSort