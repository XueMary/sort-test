const utils = require('../utils')
const {sortRule} = utils

function selectSort(arrs, sort = sortRule) {
  const len = arrs.length

  for (let j = 0; j < len; j++) {
    let minIndex = j

    for (let i = j + 1; i < len; i++) {
      if (sort(arrs[i], arrs[minIndex])) {
        minIndex = i
      }
    }

    [arrs[j], arrs[minIndex]] = [arrs[minIndex], arrs[j]]
  }
}

module.exports = selectSort