

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

  search(key) {
    return this._search(this.root, key)
  }

  _search(node, key) {
    if (node == null) {
      return null
    }
    if (node.key > key) {
      return this._search(node.left, key)
    } else if (node.key < key) {
      return this._search(node.right, key)
    } else if (node.key == key) {
      return value
    }
  }

  contain(key) {
    return this._contain(this.root, key)
  }

  _contain(node, key) {
    if (node == null) {
      return false
    }
    if (node.key > key) {
      return this._contain(node.left, key)
    } else if (node.key < key) {
      return this._contain(node.right, key)
    } else if (node.key == key) {
      return true
    }
  }

  preOrder() {
    this._preOrder(this.root)
  }

  _preOrder(node) {
    console.log(node.value)
    this._preOrder(node.left)
    this._preOrder(node.right)
  }

  inOrder() {
    this._inOrder(this.root)
  }

  _inOrder(node) {
    this._inOrder(node.left)
    console.log(node.value)
    this._inOrder(node.right)
  }

  postOrder() {
    this._postOrder(this.root)
  }

  _postOrder(node) {
    this._postOrder(node.left)
    this._postOrder(node.right)
    console.log(node.value)
  }

  levelOrder() {
    let queue = []
    queue.push(this.root)

    while (queue.length) {
      const node = queue.shift()
      console.log(node.value)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }

  minimum() {
    if (this.count !== 0) {
      const miniNode = _minimum(this.root)
      return miniNode.key
    }
  }

  _minimum(node) {
    if (node.left == null) {
      return node
    }
    return this._minimum(node.left)
  }

  maximum() {
    if (this.count !== 0) {
      const miniNode = _maximum(this.root)
      return miniNode.key
    }
  }

  _maximum(node) {
    if (node.right == null) {
      return node
    }
    return this._maximum(node.right)
  }

  removeMin() {
    let min = null
    if (this.root) {
      min = this._removeMin(this.root)
    }
    if(min){
      this.count--
    }
    return min
  }

  _removeMin(node) {
    if (node == null) {
      return node
    }

    if (node.left) {
      return this._removeMin(node.left)
    } else {
      let min = node
      node = node.right
      return min
    }
  }

  removeMax() {
    let max = null
    if (this.root) {
      max = this._removeMax(this.root)
    }
    if(max){
      this.count--
    }
    return max
  }

  _removeMin(node) {
    if (node == null) {
      return node
    }

    if (node.right) {
      return this._removeMax(node.right)
    } else {
      let max = node
      node = node.left
      return max
    }
  }

  remove(key) {
    let removeNode = null
    removeNode = this._remove(this.root, key)
    if(removeNode){
      this.count--
    }
    return removeNode
  }

  _remove(node, key) {
    if(node == null){
      return null
    }
    if (node.key > key) {
      return this._remove(node.left, key)
    } else if (node.key < key) {
      return this._remove(node.right, key)
    } else if (node.key == key) {
      const {key, value} = node
      if(node.left == null && node.right == null){
        node = null
      }else if(node.left == null){
        node = node.right
      } else if(node.right == null){
        node = node.left
      }else{
        const newNode = this._removeMin(node.right)
        const { key, value, right } = newNode
        node.key = key
        node.value = value
        if (right) {
          node.right = right
        }
      }
      return {key, value}
    }
  }

  size() {
    return this.count
  }

  empty() {
    return this.count == 0
  }
}