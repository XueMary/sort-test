
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
  let i = Math.floor(len/2) // 去除叶子节点
  for (; i >= 1; i--) {
    head._shiftDown(i) // 父级与子级比对，排成堆
  }
  for (let i = len - 1; i >= 0; i--) {
    arrs[i] = head.shiftMax()
  }
}

function heapSort3(arrs) {
  let len = arrs.length
  let head = new Heap()
  head.data = arrs
  arrs[len] = arrs[0]
  arrs[0] = 0
  head._count = len

  let i = Math.floor(len/2) // 去除叶子节点
  for (; i >= 1; i--) {
    head._shiftDown(i) // 父级与子级比对，排成堆
  }
  
  while(head._count>0){
    head.data[head._count+1] = head.shiftMax()
  }
  head.data.shift()
}

module.exports = {
  heapSort,
  heapSort2,
  heapSort3
}