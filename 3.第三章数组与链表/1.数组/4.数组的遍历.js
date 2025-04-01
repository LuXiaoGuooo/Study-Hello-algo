function traverse(nums){
    let count = 0
    for(let i = 0 ; i < nums.length ; i++){
        count += nums[i]
    }
    return  count
}

const arr = [1, 2, 3]
console.log(traverse(arr));
