
const { sortRule } = require('../utils')
const { insertSorts } = require('./insert-sort')

// 合并
function __merge(arrs, l, mid, r, sort) {
  let newArrs = []

  for (let i = l; i <= r; i++) {
    newArrs.push(arrs[i])
  }

  let k = l, i = l, j = mid + 1;

  for (; k <= r; k++) {
    if (i > mid) {
      arrs[k] = newArrs[j - l]
      j++
    }
    else if (j > r) {
      arrs[k] = newArrs[i - l]
      i++
    }
    else if (sort(newArrs[i - l], newArrs[j - l])) {
      arrs[k] = newArrs[i - l]
      i++
    }
    else {
      arrs[k] = newArrs[j - l]
      j++
    }
  }
}

// 递归拆分
function __mergeSort(arrs, l, r, sort = sortRule) {

  if (r - l <= 12) {
    insertSorts(arrs, l, r, sort)
    return
  }

  let mid = Math.floor((l + r) / 2)

  __mergeSort(arrs, l, mid, sort)
  __mergeSort(arrs, mid + 1, r, sort)

  if ( sort(arrs[mid + 1],arrs[mid])) {
    __merge(arrs, l, mid, r, sort)
  }
}

function mergeSort(arrs, sort) {
  let r = arrs.length - 1
  __mergeSort(arrs, 0, r, sort)
}

function mergeSortBU(arrs, sort = sortRule) {
  let len = arrs.length
  // 假设一次比较size个原生，i为起点,size每次merge后都是原来的2倍
  // 得：
  for (let size = 1; size <= len; size += size) {
    for (let i = 0; i + size < len; i += size + size) {
      let mid = i + size - 1
      let r = Math.min(mid+size, len-1)

      if(sort(arrs[mid+1],arrs[mid])){
        if (r - i <= 12) {
          insertSorts(arrs, i, r, sort)
        }
        else{__merge(arrs, i, mid, r, sort)}
      }
    }
  }

}


module.exports = { mergeSort, mergeSortBU }