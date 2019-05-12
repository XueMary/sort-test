
const utils = require('../utils')
const { sortRule } = utils

function shellSort(array, sort = sortRule) {
  let length = array.length;
  let gap = Math.floor(length / 2);

  while (gap > 0) {

    for (let i = gap; i < length; i++) {
      let e = array[i]
      let j;
      for (j = i; j > 0; j-=gap) {
        if(array[j-gap] && sort(e,array[j-gap])){
          array[j] = array[j-gap]
        }else{
          break
        }
      }
      array[j] = e
    }

    gap = Math.floor(gap / 2)
  }
}

module.exports = shellSort