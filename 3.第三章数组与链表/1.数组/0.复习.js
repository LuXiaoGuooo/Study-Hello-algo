function extend(nums, enlarge){
    let arr = new Array(nums.length + enlarge).fill(0)
    for(let i = 0; i < nums.length ; i++){
        arr[i] = nums[i]
    }
    return arr
}

const arr = [1, 2, 3]
const brr = extend(arr, 2)
console.log(brr);

