function bubbleSort(nums){
    //外循环：未排序的区间 [0, n-1]
    for(let i = nums.length - 1; i > 0;i--){
        //内循环：将未排序区间 [0, n-1] 中的最大元素放到该区间的最右边
        for(let j = 0; j < i ; j++){
            if(nums[j] > nums[j+1]){
                //交换 nums[j] 和 nums[j+1]
                let temp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = temp
            }
        }
    }
}

const arr = [2, 8, 10, 2, 6]
bubbleSort(arr)
console.log(arr);
