// 1. 递归
function recur(n){
    // 终止条件
    if( n === 1 ) return 1;
    // 递
    const res = recur(n - 1);
    // 归
    return n + res
}

console.log(recur(10));

// 2. 尾递归
function tailRecur(n, res){
    // 终止条件
    if( n === 0 ) return res
    // 尾递归调用
    return tailRecur(n - 1, res + n)
}
