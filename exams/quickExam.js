const utils = require('../utils')
const shellSort = require('../src/shell-sort')
const {mergeSort} = require('../src/merge-sort')
const quickSort = require('../src/quick-sort')

const {randomArray, testSortTime} =utils


let arrs = []
let n = 1000000

// arrs = randomArray(n, 10, n)
// testSortTime("shell sort", shellSort, arrs)

// arrs = randomArray(n, 10, n)
// testSortTime("merge sort", mergeSort, arrs)

// arrs = randomArray(n, 10, n)
// testSortTime("quick sort", quickSort, arrs)

// 大量重复值
// arrs = randomArray(n, 10, 20)
// testSortTime("merge sort", mergeSort, arrs)


arrs = randomArray(n, 10, n)
testSortTime("quick sort", quickSort, arrs, (a,b)=>{
  return a.value>b.value
})

arrs = randomArray(n, 10, n)
let star  = new Date().getTime()
arrs.sort((a,b)=>a.value>b.value)
let end  = new Date().getTime()
console.log((end-star)/ 1000)

