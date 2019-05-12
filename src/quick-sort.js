
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

  let p = _partition(arrs, l, r, sort)
  _quickSort(arrs, l, p - 1, sort)
  _quickSort(arrs, p + 1, r, sort)

}

function _partition(arrs, l, r, sort) {
  let random = Math.floor(Math.random() * (r - l) + l)

  let lv = arrs[l]
  arrs[l] = arrs[random]
  arrs[random] = lv

  let v = arrs[l]

  // arrs[l...i) <=v; arrs(j...r] >=v;
  let i = l + 1, j = r;

  while (true) {
    while (i <= r && sort(arrs[i], v)) i++
    while (j >= l && sort(v, arrs[j])) j--
    if (i > j) break
    [arrs[j], arrs[i]] = [arrs[i], arrs[j]]
    i++
    j--
  }

  [arrs[j], arrs[l]] = [arrs[l], arrs[j]]

  return j
}
module.exports = quickSort