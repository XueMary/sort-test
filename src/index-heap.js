

// int[] indexdata
// any[] valuedata
// 比对 value data， 交换 index data
// _count 长度
// insert 插入，shiftMax 移出，size 大小
class IndexHeap {

  constructor() {
    this.indexData = ['index']
    this.valueData = ['value']
    this._count = 0
  }

  size() {
    return this._count
  }

  insert(value) {
    this._count++
    this.indexData[this._count] = this._count
    this.valueData[this._count] = value

    this.shiftUp(this._count)
  }

  shiftMax() {
    let maxValue = this.valueData[this.indexData[1]]

    let firstIndex = this.indexData[1]
    this.indexData[1] = this.indexData[this._count]
    this.indexData[this._count] = firstIndex
    
    this._count--

    this.shiftDown(1)

    return maxValue
  }

  shiftUp(point) {
    // 将指定位置数据向上比对，移动到合适的位置
    // point/2 向下取整，取到父级的位置

    let currentPoint = point
    while (true) {
      if (currentPoint <= 1) {
        return
      }
      let parentPoint = Math.floor(point / 2) // 父级位置
      let parentIndex = this.indexData[parentPoint] // 父级 index
      let parentValue = this.valueData[parentIndex] // 父级 value

      let currentIndex = this.indexData[currentPoint]
      let currentValue = this.valueData[currentIndex]

      if (currentValue > parentValue) {
        // 交换index data
        [this.indexData[currentPoint], this.indexData[parentPoint]] = [this.indexData[parentPoint], this.indexData[currentPoint]]

        currentPoint = parentPoint
      } else {
        return
      }
    }
  }

  shiftDown(point) {
    // 将指定位置数据向下比对，移动到合适的位置
    // point*2, point*2+1, 获取两个父级

    let currentPoint = point

    while (true) {
      if(currentPoint>=this._count){
        return
      }

      let onePoint = point * 2
      let oneIndex = this.indexData[onePoint]
      let oneValue = onePoint <= this._count ? this.valueData[oneIndex] : 0

      let twoPoint = point * 2 + 1
      let twoIndex = this.indexData[twoPoint]
      let twoValue = twoPoint <= this._count ? this.valueData[twoIndex] : 0

      let currentValue = this.valueData[this.indexData[currentPoint]]
      
      if (oneValue > twoValue && oneValue > currentValue) {
        [this.indexData[onePoint], this.indexData[currentPoint]] = [this.indexData[currentPoint], this.indexData[onePoint]]
        currentPoint = onePoint
      }
      else if (oneValue < twoValue && twoValue > currentValue) {
        [this.indexData[twoValue], this.indexData[currentPoint]] = [this.indexData[currentPoint], this.indexData[twoValue]]
        currentPoint = twoPoint
      }
      else {
        return
      }
      
    }

  }

}

module.exports = IndexHeap