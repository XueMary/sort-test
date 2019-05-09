
function randomArray(len, min, max) {

  if(len<0){
    throw new Error("len can't less 0")
  }
  if (min > max) {
    throw new Error("min can't less max")
  }

  let arrs = []

  for (let i = 0; i < len; i++) {
    const random = Math.random() * (max - min) + min
    arrs.push(random)
  }

  return arrs;
}

function sortRule(a, b) {
  return a < b
}

module.exports = {
  randomArray,
  sortRule
}