const Heap = require('../src/heap')

const heap = new Heap()
console.log(heap.size())
console.log(heap.isEmpty())
heap.insert(9)
heap.insert(7)
heap.insert(10)
heap.insert(16)
heap.insert(13)
console.log(heap.data)


while(!heap.isEmpty())
  console.log(heap.shiftMax())