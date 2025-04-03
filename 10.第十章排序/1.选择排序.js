//选择排序
function selectionSort(nums){
    let n = nums.length
    //外循环： 未排序区间为 [i, n-1]
    //外循环为什么是 i < n- 1 这其实是一个性能优化的点，因为最后一个元素一定是最大的，所以少走一个迭代
    for(let i = 0 ; i < n-1 ; i++){
        //内循环:找未排序可区间的最小元素
        let k = i
        for(let j = i + 1; j < n; j++){
            if(nums[j] < nums[k]){
                k = j
            }
        }
        //进行交换
        let temp = nums[i]
        nums[i] = nums[k]
        nums[k] = temp
    }
}
 
const arr = [2, 8, 10, 2, 6]
selectionSort(arr)
console.log(arr);
