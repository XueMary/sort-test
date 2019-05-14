
const Heap = require('./heap')


function heapSort(arrs) {
  let len = arrs.length
  let head = new Heap()
  for (let i = 0; i < len; i++) {
    head.insert(arrs[i])
  }
  for (let i = len - 1; i >= 0; i--) {
    arrs[i] = head.shiftMax()
  }
}

function heapSort2(arrs) {
  let len = arrs.length
  let head = new Heap()
  for (let i = 0; i < len; i++) {
    head.data[i+1] = arrs[i]
  }
  head._count = len
  let i = Math.floor(len/2)
  for (; i >= 1; i--) {
    head._shiftDown(i)
  }
  for (let i = len - 1; i >= 0; i--) {
    arrs[i] = head.shiftMax()
  }
}

module.exports = {
  heapSort,
  heapSort2
}