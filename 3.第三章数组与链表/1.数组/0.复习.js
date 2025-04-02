function insert(nums, num, index){
    for(let i = nums.length - 1 ; i > index ; i--){
        nums[i] = nums[i - 1]
    }
    nums[index] = num
}

const arr = [ 1, 2, 3]
insert(arr , 20 , 1)
console.log(arr)
