const utils = require('../utils')
const { sortRule } = utils

function bubSortt(arrs, sort = sortRule) {
  const len = arrs.length

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len-1-i; j++) {
      if(sort(arrs[j+1],arrs[j])){
        [arrs[j+1],arrs[j]] = [arrs[j],arrs[j+1]]
      }
    }
  }
}

module.exports = bubSortt