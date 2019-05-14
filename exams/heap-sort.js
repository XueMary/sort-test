const utils = require('../utils')
const quickSort = require('../src/quick-sort')
const {heapSort,heapSort2,heapSort3} = require('../src/heap-sort')

const {randomArray, testSortTime} =utils


let arrs = []
let n = 1000000



arrs = randomArray(n, 10, n)
testSortTime("quick sort", quickSort, arrs)

arrs = randomArray(n, 10, n)
testSortTime("heap sort", heapSort, arrs)

arrs = randomArray(n, 10, n)
testSortTime("heap2 sort", heapSort2, arrs)

arrs = randomArray(n, 10, n)
testSortTime("heap3 sort", heapSort3, arrs)

