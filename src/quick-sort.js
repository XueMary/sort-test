
const { sortRule } = require('../utils')

function quickSort(arrs, sort = sortRule) {
  let len = arrs.length
  _quickSort(arrs, 0, len - 1, sort)
}

function _quickSort(arrs, l, r, sort) {

  if (l >= r) {
    return
  }

  let p = _partition(arrs, l, r, sort)
  _quickSort(arrs, l, p - 1, sort)
  _quickSort(arrs, p + 1, r, sort)

}

function _partition(arrs, l, r, sort) {
  let p = l
  let j = l, i = l + 1;

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