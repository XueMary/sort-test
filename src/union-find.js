

class UnionFind {
  constructor(n){
    this.parents = []
    this.ranks = []
    this.count = n
    this.init(n)
  }

  init(n){
    for(let i = 0; i < n; i++)
    {
      this.parents[i] = i
      this.ranks[i] = 1
    }
  }

  find(q){
    if(!(q <= this.count && q >= 0)) return -1;
    while(q !== this.parents[q]){
      this.parents[q] = this.parents[this.parents[q]]
      q = this.parents[q]
    }
    return q
  }

  union(q,p){
    let qRoot = this.find(q)
    let pRoot = this.find(p)

    if(qRoot === pRoot) return;
    
    if(this.ranks[pRoot] > this.ranks[qRoot]){
      this.parents[qRoot] = this.parents[pRoot]
    } else if(this.ranks[pRoot] < this.ranks[qRoot]){
      this.parents[pRoot] = this.parents[qRoot]
    } else{
      this.parents[pRoot] = this.parents[qRoot]
      this.ranks[qRoot]++
    }
    
  }

  isConnect(q,p){
    let qRoot = this.find(q)
    let pRoot = this.find(p)

    return qRoot === pRoot
  }
}

module.exports = UnionFind