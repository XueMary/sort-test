

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

  search(key){
    return this._search(this.root, key)
  }

  _search(node, key){
    if(node == null){
      return null
    }
    if(node.key > key){
      return this._search(node.left, key)
    } else if(node.key < key){
      return this._search(node.right, key)
    } else if(node.key == key){
      return value
    }
  }

  contain(key){
    return this._contain(this.root, key)
  }

  _contain(node, key){
    if(node == null){
      return false
    }
    if(node.key > key){
      return this._contain(node.left, key)
    } else if(node.key < key){
      return this._contain(node.right, key)
    } else if(node.key == key){
      return true
    }
  }

  preOrder(){
    this._preOrder(this.root)
  }

  _preOrder(node){
    console.log(node.value)
    this._preOrder(node.left)
    this._preOrder(node.right)
  }

  inOrder(){
    this._inOrder(this.root)
  }

  _inOrder(node){
    this._inOrder(node.left)
    console.log(node.value)
    this._inOrder(node.right)
  }

  postOrder(){
    this._postOrder(this.root)
  }

  _postOrder(node){
    this._postOrder(node.left)
    this._postOrder(node.right)
    console.log(node.value)
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.count == 0
  }
}