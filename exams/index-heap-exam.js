const IndexHeap = require('../src/index-heap')


let indexHeap = new IndexHeap()
let random;
let data = []
// 测试 insert
random = Math.floor(Math.random()*100)
indexHeap.insert(random)
console.log(indexHeap.indexData)
console.log(indexHeap.valueData)

random = Math.floor(Math.random()*100)
indexHeap.insert(random)
console.log(indexHeap.indexData)
console.log(indexHeap.valueData)

random = Math.floor(Math.random()*100)
indexHeap.insert(random)
console.log(indexHeap.indexData)
console.log(indexHeap.valueData)

random = Math.floor(Math.random()*100)
indexHeap.insert(random)
console.log(indexHeap.indexData)
console.log(indexHeap.valueData)


// 测试shiftMax
data.push(indexHeap.shiftMax())
data.push(indexHeap.shiftMax())
data.push(indexHeap.shiftMax())
data.push(indexHeap.shiftMax())
console.log(data)

