
const { sortRule } = require('../utils')
const { insertSorts } = require('./insert-sort')

function quickSort(arrs, sort = sortRule) {
  let len = arrs.length
  _quickSort(arrs, 0, len - 1, sort)
}

function _quickSort(arrs, l, r, sort) {

  if (r - l <= 10) {
    insertSorts(arrs, l, r, sort)
    return
  }

  let {lt, gt} = _partition(arrs, l, r, sort)
  _quickSort(arrs, l, lt, sort)
  _quickSort(arrs, gt, r, sort)

}

function _partition(arrs, l, r, sort) {
  let random = Math.floor(Math.random() * (r - l) + l)

  let lv = arrs[l]
  arrs[l] = arrs[random]
  arrs[random] = lv

  let v = arrs[l]

  // arrs[l...lt] < v; arrs[lt+1, .... gt-1] = v; arrs[gt, r] >v;
  let i = l+1; // 下标
  let lt = l, gt = r+1;
  
  while(i<gt){
    if(sort(arrs[i],v)){
      lt++  
      [arrs[lt], arrs[i]] = [arrs[i], arrs[lt]]
      i++
    }
    else if(arrs[i]==v){
      i++
    }
    else if(sort(v,arrs[i])){
      gt-- 
      [arrs[gt], arrs[i]] = [arrs[i], arrs[gt]]
    }
  }

  [arrs[lt], arrs[l]] = [arrs[l], arrs[lt]]

  return {lt,gt}
}
module.exports = quickSort