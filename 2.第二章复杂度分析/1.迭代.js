// 1.for是最常见的迭代方式之一，适合预先知道迭代次数的时候使用
function forLoop(n){
    let res = 0
    for(let i = 1;i<=n; i++){
        res += 1
    }
    return res
}

console.log(forLoop(10))

// 或者while循环，比for循环的自由度1更高，在while循环中，我们可以自由设计条件变量的初始化和更新步骤
// 比如下列代码，条件变量 i 每轮要进行 两次哦更新 这种情况既不方便用 for 实现
function whileLoop(n){
    let res = 0
    let i = 1
    while(i <= n ){
        res += i
        //更新条件变量
        i++
        i *= 2
    }
    return res
}

console.log(whileLoop(3))
// 这个逻辑就是当 i < n 的时候  返回 res 当 n = 3的 时候 ，第一遍循环 i 就到 4 了 所以就执行了一遍 
//3. 嵌套循环
function nestedForLoop(n){
    let res = ''
    for(let i = 1 ; i <= n; i++){
        for(let j = 1 ; j <=n; j++){
            res += `{$}`   
        }
    }
}