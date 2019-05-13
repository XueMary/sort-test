const utils = require('../utils')
const quickSort = require('../src/quick-sort')
const {heapSort} = require('../src/heap-sort')

const {randomArray, testSortTime} =utils


let arrs = []
let n = 1000000



arrs = randomArray(n, 10, n)
testSortTime("quick sort", quickSort, arrs)

arrs = randomArray(n, 10, n)
testSortTime("heap sort", heapSort, arrs)

