
function randomArray(len, min, max) {

  if(len<0){
    throw new Error("len can't less 0")
  }
  if (min > max) {
    throw new Error("min can't less max")
  }

  let arrs = []

  for (let i = 0; i < len; i++) {
    const random = (Math.random() * (max - min)) + min
    arrs.push(Number(random))
  }

  return arrs;
}
function orderlyArray(len) {
  let arrs = []

  for (let i = 0; i < len; i++) {
    arrs.push(i)
  }

  return arrs;
}

function sortRule(a, b) {
  return a < b
}

function testSortTime (sortName, sort, arrs, sortRule) {
  const start = new Date().getTime()
  sort(arrs, sortRule)
  const end = new Date().getTime()
  if(isSort(arrs, sortRule)){
    console.log(`${sortName} consume time ${(end-start)/1000} s`)
  }
  else{
    throw new Error("Sort Error, please inspect sort rule code")
  }
}

function isSort(arrs,sortRule){
  sortRule = sortRule || function(a,b){
    return a<b
  }
  const len =arrs.length
  for(let i = 0; i<len-1;i++){
    if(sortRule(arrs[i+1],arrs[i])){
      return false
    }
  }
  return true
}


module.exports = {
  randomArray,
  sortRule,
  testSortTime,
  orderlyArray,
}