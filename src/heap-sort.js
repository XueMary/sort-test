
const Heap = require('./heap')


function heapSort(arrs){
  let len = arrs.length
  let head = new Heap()
  for(let i=0;i<len;i++){
    head.insert(arrs[i])
  }
  for(let i=len-1;i>=0;i--){
    arrs[i] = head.shiftMax()
  }
}

module.exports = {
  heapSort
}