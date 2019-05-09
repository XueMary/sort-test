const utils = require('../utils')
const selectSort = require('../src/select-sort')

const {randomArray, testSortTime} =utils

const arrs = randomArray(100000, 10, 1000)

// 从小到大
// testSortTime("select sort", selectSort, arrs)

// 从大到小
testSortTime("select sort", selectSort, arrs, (a,b)=>a>b)