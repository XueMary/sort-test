const utils = require('../utils')
const { sortRule } = utils

function insertSort(arrs, sort = sortRule) {
  const len = arrs.length

  for (let i = 1; i < len; i++) {

    let e = arrs[i]
    let j;
    for (let j = i; j > 0; j--) {
      if (sort(e, arrs[j - 1])) {
        arrs[j] = arrs[j - 1]
      } else {
        break;
      }
    }
    arrs[j] = e
  }
}

function insertSorts(arrs, l, r, sort = sortRule) {
  const len = arrs.length

  for (let i = l+1; i <= r; i++) {

    let e = arrs[i]
    let j;
    for (let j = i; j > l; j--) {
      if (sort(e, arrs[j - 1])) {
        arrs[j] = arrs[j - 1]
      } else {
        break;
      }
    }
    arrs[j] = e
  }
}

module.exports = {
  insertSort,
  insertSorts
}