const utils = require('../utils')
const insertSort = require('../src/insert-sort')
const selectSort = require('../src/select-sort')
const bubSort = require('../src/bub-sort')
const shellSort = require('../src/shell-sort')

const {orderlyArray, testSortTime} =utils


let arrs = []


// vs insert select sort

arrs = orderlyArray(10000)
testSortTime("insert sort", insertSort, arrs)


arrs = orderlyArray(10000)
testSortTime("select sort", selectSort, arrs)


arrs = orderlyArray(10000)
testSortTime("bub sort", bubSort, arrs)

arrs = orderlyArray(10000)
testSortTime("shell sort", shellSort, arrs)