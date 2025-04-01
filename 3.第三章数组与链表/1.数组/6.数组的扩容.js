//扩展数组长度
//因为javascript 的 Array 是动态数组 可以直接扩容
//为了方便学习，本函数将Array看成不可扩容
function extend(nums, enlarge){
    //1. 初始化一个扩容长度的数组1
    const res = new Array(nums.length + enlarge).fill(0)
    //2. 将原数组中的所有元素复制到新1数组上
    // 为什么 i 是 0 而不是 1 ， 因为在边迭代的是数组下标
    for(let i = 0; i< nums.length ; i++){
        res[i] = nums[i]
    }
    //返回扩展后的新数组
    return res
}

const arr = [1, 2, 3]
const brr = extend(arr, 2)
console.log(brr);

