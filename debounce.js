/**
 * 防抖： 管事件触发频率多高，一定在事件触发 n 秒后才执行，如果在一个事件执行的 n秒内又触发了这个事件，就以新的事件的时间为准
 * @callback fn  -被调用的函数 
 * @param {number} [wait = 300] -定时器时间  
 * @param {boolean} [immediate = false] -是否要立即执行一次  
 * @return {function}
 */
import verification from './verification.js';
export function debounce(fn, wait = 300, immediate = false) {

    // 参数验证
    verification.isFunction(fn);
    verification.isNumber(wait);
    verification.isBoolean(immediate);

    let timer = null;

    // 返回一个函数
    return function() {

        // 是否要立即执行一次
        if (!timer && immediate)
            fn.apply(this, arguments);

        // 每次触发事件时都取消之前的定时器
        clearTimeout(timer);

        // setTimeout 中使用箭头函数，就是让 this指向 返回的该闭包函数，而不是 debounce函数 的调用者
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, wait)
    }
}

// js使用方法
// window.addEventListener('resize', debounce(function() {}, 200));

// vue使用方法
// mehtod: debounce(function() {}, 200)