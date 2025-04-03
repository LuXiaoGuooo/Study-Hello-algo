function selectionSort(nums){
    let n = nums.length
    for(let i = 0 ; i < n - 1 ; i++){
        let k  = i
        for(let j = i + 1 ; j < n ; j++){
            if(nums[j] < nums[k]){
                 k = j
            }
        }
        let temp = nums[i]
        nums[i] = nums[k]
        nums[k] = temp
    }
    return nums
}


//test 
function getRandomInt(max){
    return Math.floor(Math.random() * max)
}
function isIncreasing(nums){
    for(let i = 0 ; i < nums.length - 1 ; i++){
        if(nums[i] > nums[i+1]){
            return false
        }
    }
    return true
}

for(let i = 0 ; i < 100 ; i++){
    const length = getRandomInt(100)
    const arr = new Array()
    for(let j = 0 ; j < length ; j++){
        arr.push(getRandomInt(100))
    }
    const brr = selectionSort(arr)
    var result = isIncreasing(brr)
    if(!result) throw "this wrong answer"
}