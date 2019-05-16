

const quickSortDerive = require('../src/test1')
const quickSort = require('../src/quick-sort')
const { randomArray, testSortTime } = require('../utils')


let arrs = []
let n = 50000000

arrs = randomArray(n, 10, n)

let start = new Date().getTime()
quickSortDerive(arrs, 1000)
let end = new Date().getTime()
console.log((end - start) / 1000)

// arrs = randomArray(n, 10, n)
// testSortTime('quick sort', quickSort,arrs)