


function quickSort(arrs, number) {
  let len = arrs.length
  _quickSort(arrs, 0, len - 1, number)
}

function _quickSort(arrs, l, r, number) {

  if (l>r) {
    return
  }
  
  let {lt, gt} = _partition(arrs, l, r)
  
  if(lt==number||gt==number||(lt<number&&gt>number)){
    arrs = arrs.splice(0, number)
    return
  }

  if(lt<number){
    _quickSort(arrs, gt, r, number)
  }else if(gt>number){
    _quickSort(arrs, l, lt, number)
  }

}

function _partition(arrs, l, r) {
  let random = Math.floor(Math.random() * (r - l) + l)

  let lv = arrs[l]
  arrs[l] = arrs[random]
  arrs[random] = lv

  let v = arrs[l]

  // arrs[l...lt] < v; arrs[lt+1, .... gt-1] = v; arrs[gt, r] >v;
  let i = l+1; // 下标
  let lt = l, gt = r+1;
  
  while(i<gt){
    if(arrs[i]<v){
      lt++  
      [arrs[lt], arrs[i]] = [arrs[i], arrs[lt]]
      i++
    }
    else if(arrs[i]==v){
      i++
    }
    else if(v<arrs[i]){
      gt-- 
      [arrs[gt], arrs[i]] = [arrs[i], arrs[gt]]
    }
  }

  [arrs[lt], arrs[l]] = [arrs[l], arrs[lt]]
  
  return {lt,gt}
}
module.exports = quickSort