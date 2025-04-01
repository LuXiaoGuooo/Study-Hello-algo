//在数组索引 index 处插入元素 num
function insert(nums, num, index){
    //把索引 index 以及之后的所有元素向后移动一位
    for(let i = nums.length - 1; i > index; i--){
        nums[i] = nums[i - 1]
    }
    //将 num 赋给 index处 的元素
    nums[index] = num
}

