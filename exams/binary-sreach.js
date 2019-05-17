const { orderlyArray } = require('../utils')
const binarySearch = require('../src/binary-sreach')

// [1.....1000]
let arrs = orderlyArray(1000)
console.log(binarySearch(arrs, 10))
console.log(binarySearch(arrs, 40))
console.log(binarySearch(arrs, 20))