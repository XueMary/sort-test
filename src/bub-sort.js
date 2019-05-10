const utils = require('../utils')
const { sortRule } = utils

function bubSortt(arrs, sort = sortRule) {
  const len = arrs.length

  for (let i = 0; i < len; i++) {
    let j;
    let e = arrs[i]
    for (j = 0; j < len-1-i; j++) {
      if(sort(arrs[j+1],e)){
        arrs[j] = arrs[j+1]
      }else{
        arrs[j] = e
        e = arrs[j+1]
      }
    }
  }
}

module.exports = bubSortt