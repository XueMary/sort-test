const utils = require('../utils')
const shellSort = require('../src/shell-sort')
const {mergeSort} = require('../src/merge-sort')
const quickSort = require('../src/quick-sort')

const {randomArray, testSortTime} =utils


let arrs = []
let n = 1000000

arrs = randomArray(n, 10, n)
testSortTime("shell sort", shellSort, arrs)

arrs = randomArray(n, 10, n)
testSortTime("merge sort", mergeSort, arrs)

arrs = randomArray(n, 10, n)
testSortTime("quick sort", quickSort, arrs)

// arrs = randomArray(n, 10, n)
// let start = new Date().getTime()
// arrs.sort()
// let end = new Date().getTime()
// console.log(`${(end-start)/1000} s`)
