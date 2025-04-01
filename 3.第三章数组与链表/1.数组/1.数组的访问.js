// 在数组数组上访问元素非常高效，我们可以在 O(1) 时间内随机访问 数组上的任一元素
function randomAccess(nums){
    // 在区间 [0, nums.length) 中随机抽取一个数字
    const randomIndex = Math.floor(Math.random() * nums.length)
    // 获取并返回随机元素
    const randomNum = nums[randomIndex]
    return randomNum
}

console.log(randomAccess(5));
