

// 没找到 return -1
function binarySearch(arrs, target){
  let len = arrs.length

  // arrs[l....r]
  let l = 0, r = len-1, mid;
  let index = -1
  while(l<=r){
    mid = Math.floor((r-l)/2)+l

    let midV = arrs[mid]
    if(midV<target){
      l = mid + 1
    }
    else if(midV>target){
      r = mid - 1
    }
    else{
      index = mid
      break;
    }
  }

  return index
}


module.exports = binarySearch