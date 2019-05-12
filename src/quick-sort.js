
const { sortRule } = require('../utils')
const { insertSorts } = require('./insert-sort')

function quickSort(arrs, sort = sortRule) {
  let len = arrs.length
  _quickSort(arrs, 0, len - 1, sort)
}

function _quickSort(arrs, l, r, sort) {

  if (r-l<=10) {
    insertSorts(arrs, l, r, sort)
    return
  }

  let p = _partition(arrs, l, r, sort)
  _quickSort(arrs, l, p - 1, sort)
  _quickSort(arrs, p + 1, r, sort)

}

function _partition(arrs, l, r, sort) {
  let p = Math.floor(Math.random() * (r - l) + l)
  let j = l, i = l + 1;

  [arrs[p], arrs[j]] = [arrs[j], arrs[p]]
  p = j

  for (; i <= r; i++) {
    if (sort(arrs[i], arrs[p])) {
      j++
      [arrs[i], arrs[j]] = [arrs[j], arrs[i]]
    }
  }

  [arrs[p], arrs[j]] = [arrs[j], arrs[p]]
  p = j

  return p
}

module.exports = quickSort