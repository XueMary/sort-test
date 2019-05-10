const utils = require('../utils')
const insertSort = require('../src/insert-sort')
const selectSort = require('../src/select-sort')
const bubSort = require('../src/bub-sort')
const shellSort = require('../src/shell-sort')

const {randomArray, testSortTime} =utils


let arrs = []


// vs insert select sort

arrs = randomArray(10000, 10, 1000)
testSortTime("insert sort", insertSort, arrs)


arrs = randomArray(10000, 10, 1000)
testSortTime("select sort", selectSort, arrs)


arrs = randomArray(10000, 10, 1000)
testSortTime("bub sort", bubSort, arrs)

arrs = randomArray(10000, 10, 1000)
testSortTime("shell sort", shellSort, arrs)