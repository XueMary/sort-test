
class MaxHeap {
  constructor() {
    this._count = 0
    this.data = [0]
  }

  size() {
    return this._count
  }

  isEmpty() {
    return this._count === 0
  }

  insert(value) {

    this.data.push(value)
    this._count++
    this._shiftUp(this._count)
  }

  shiftMax(){
    const first = this.data[1]
    this.data[1] = this.data[this._count]
    this.data.pop()
    this._count--

    this._shiftDown(1)
    return first
  }

  _shiftDown(k){
    let v = this.data[k]
    while(k*2<=this._count){
      let j = k*2
      if(j<=this._count&& this.data[j]<this.data[j+1]){
        j += 1
      }
      if(this.data[k]>this.data[j]){
        break;
      }
      this.data[k] = this.data[j]
      k=j
    }
    this.data[k] = v
  }

  _shiftUp(k) {
    while (k>1&&this.data[Math.floor(k / 2)] < this.data[k]) {
      [this.data[k], this.data[Math.floor(k / 2)]] = [this.data[Math.floor(k / 2)], this.data[k]]
      k = Math.floor(k / 2)
    }
  }
}

module.exports = {
  MaxHeap
}