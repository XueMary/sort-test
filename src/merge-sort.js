
const utils = require('../utils')
const {sortRule} = utils

// 合并
function __merge(arrs, l, r) {
  let newArrs = []

  let mid = (l + r) / 2

  for(let i = l; i<=r;i++){
    newArrs.push(arrs[i])
  }

  let k = l, i = l, j = mid+1;

  for (; k <= r; k++) {
    if(i>mid){
      arrs[k] = newArrs[j-l]
      j++
    }
    else if(j>r){
      arrs[k] = newArrs[i-l]
      i++
    }
    else if(newArrs[i-l]<newArrs[j-l]){
      arrs[k] = newArrs[i-l]
      i++
    }
    else{
      arrs[k] = newArrs[j-l]
      j++
    }
  }
}

// 递归拆分
function __mergeSort(arrs, l, r) {

  if (l >= r) return;

  let mid = (l + r) / 2

  __mergeSort(arrs, l, mid)
  __mergeSort(arrs, mid + 1, r)
  __merge(arrs, l, r)
}

function mergeSort(arrs, sort) {
  let r = arrs.length - 1
  __mergeSort(arrs, 0, r)
}


module.exports = mergeSort