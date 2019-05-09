const utils = require('../utils')
const selectSort = require('../src/select-sort')

const {randomArray} =utils

const arrs = randomArray(10, 10, 1000)

// 从小到大
selectSort(arrs)
console.log(arrs)

// 从大到小
selectSort(arrs,(a,b)=>a>b)
console.log(arrs)