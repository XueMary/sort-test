

const quickSortDerive = require('../src/test1')
const {randomArray} = require('../utils')


let arrs = []

arrs = randomArray(5, 10, 1000000)
console.log(arrs)
quickSortDerive(arrs,2)

for(let i = 0; i<arrs.length;i++)
  console.log(arrs[i])