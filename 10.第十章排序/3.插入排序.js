function insertionSore(nums){
    //已经排序的区间 [0, i-1]
    for(let i = 1 ; i < nums.length  ; i++){
      let base = nums[i]
      j = i - 1 
      //内循环；将base 插入到 已经排序区间[0, i-1]中
      while( j  >= 0 && nums[j] > base){
        nums[j + 1] = nums[j];
        //这里的j-- 就是已经排序好的空间，往前移
        j--
      }
      nums[j + 1] = base
    }
}

const arr = [23, 88, 90, 45, 1]
insertionSore(arr)
console.log(arr);
