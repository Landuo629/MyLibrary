/**
 * 函数柯里化：只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数
 * @callback fn  -被调用的函数 
 * @param {number} [wait = 300] -定时器时间  
 * @param {...*}  args
 * @return {function}
 */
import verification from './verification.js';
export function curry(fn, ...args) {
    // 参数验证
    verification.isFunction(fn);

    return args.length >= fn.length ? fn(...args) : (..._args) => curry(fn, ...args, ..._args);
    /**
     * 函数的参数个数可以直接通过函数数的.length属性来访问
     * 传入的参数大于等于原始函数fn的参数个数，则直接执行该函数
     * 传入的参数小于原始函数fn的参数个数时
     * 则继续对当前函数进行柯里化，返回一个接受所有参数（当前参数和剩余参数） 的函数
     */
}