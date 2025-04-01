//线性查找方案
function find(nums, target){
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] === target) return i
    }
    return -1
}

const arr = [1, 2, 3]
console.log(find(arr, 1));
