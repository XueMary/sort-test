const utils = require('../utils')
const insertSort = require('../src/insert-sort')
const selectSort = require('../src/select-sort')
const bubSort = require('../src/bub-sort')
const shellSort = require('../src/shell-sort')
const mergeSort = require('../src/merge-sort')

const {randomArray, testSortTime} =utils


let arrs = []
let n = 500000

// vs insert select sort

// arrs = randomArray(n, 10, 1000)
// testSortTime("insert sort", insertSort, arrs)


// arrs = randomArray(n, 10, 1000)
// testSortTime("select sort", selectSort, arrs)

// 冒泡的效率实在是太慢了，所以还是注释了
// arrs = randomArray(n, 10, 1000)
// testSortTime("bub sort", bubSort, arrs)

arrs = randomArray(n, 10, n)
testSortTime("shell sort", shellSort, arrs)

arrs = randomArray(n, 10, n)
testSortTime("merge sort", mergeSort, arrs)