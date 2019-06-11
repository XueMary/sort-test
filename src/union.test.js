
const UnionFind = require('./union-find')

describe('union find', () =>{
  test('union',()=>{
    const unionFind = new UnionFind(10)
    expect(unionFind.count).toBe(10)
    expect(unionFind.find(0)).toBe(0)
    expect(unionFind.find(7)).toBe(7)
    unionFind.union(0, 7)
    expect(unionFind.isConnect(0,7)).toBeTruthy()
    unionFind.union(5, 7)
    expect(unionFind.isConnect(5,0)).toBeTruthy()
  })
  test('union rank',()=>{
    const unionFind = new UnionFind(10)
    unionFind.union(0, 7)
    unionFind.union(5, 7)
    unionFind.union(5, 6)
    unionFind.union(8, 6)
    expect(unionFind.ranks[unionFind.find(5)]).toBe(2)
    unionFind.union(1, 2)
    unionFind.union(3, 1)
    unionFind.union(1, 6)
    expect(unionFind.ranks[unionFind.find(1)]).toBe(3)
  })
})