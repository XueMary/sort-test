

class NODE {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.left = this.right = null
  }
}


class BST {
  constructor() {
    this.root = null
    this.count = 0
  }

  // obj: key value
  inserter(obj) {
    const { key, value } = obj
    this.root = this._inserter(this.root, key, value)
    this.count++;
  }

  _inserter(node, key, value) {
    if (node == null) {
      return new NODE(key, value)
    }

    if (node.key == key) {
      node.value = value
    } else if (node.key > key) {
      node.left = this._inserter(node.left, key, value)
    } else if (node.key < key) {
      node.right = this._inserter(node.right, key, value)
    }

    return node
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.count == 0
  }
}