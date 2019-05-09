
function randomArray(len, min, max) {
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