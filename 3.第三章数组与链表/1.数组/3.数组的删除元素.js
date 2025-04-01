function remove(nums, index){
    for(let i = index; i < nums.length - 1; i++){
        nums[i] = nums[i + 1]
    }
    nums.length--
}

const arr = [1, 2, 3]
remove(arr, 2)
console.log(arr)
