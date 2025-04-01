//使用一个显式的栈来模拟调用栈的行为，从而1将递归转化为迭代形式
// 使用迭代模拟递归
function forLoopRecur(n){
    //使用一个显示的栈来模拟系统调用栈
    const stack = [];
    let res = 0
    //递：递归调用
    for(let i = n ; i > 0 ; i--){
        //通过入栈操作模拟 递
        stack.push(i)
    }
    //归：返回结果
    while(stack.length){
        //通过出栈模拟“归”
        res += stack.pop()
    }
    //res = 1 + 2 + 3 + 4 + 。。。 + n
    return res
}