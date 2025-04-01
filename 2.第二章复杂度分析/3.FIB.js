function fib(n){
    // 判断 n 是不是 1 或者 2
    if(n === 1 || n === 2) return n-1
    //递归调用 f(n) = f(n-1) + f(n-2)
    const res = fib(n-1) + fib(n-2)
    //返回结果 f(n)
    return res
}

console.log(fib(5));
