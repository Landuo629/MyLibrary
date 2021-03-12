/**
 * 节流： 不管事件触发频率有多高，只在单位时间内执行一次
 * 第一次事件和最后一次事件都触发
 * @callback fn  -被调用的函数 
 * @param {number} [wait = 300] -定时器时间  
 * @return {function}
 */
import verification from './verification.js';
export function throttle(fn, wait = 300) {

    // 参数验证
    if (!verification.isFunction(fn))
        throw Error("第一个参数必须传递并且类型为函数");
    if (!verification.isNumber(wait))
        throw Error("第二个参数类型必须是数字");


    // 设置一个定时器
    let timer = null;

    // 记录上一次执行的时间戳
    let previous = 0;

    return function () {
        // 当前的时间戳，然后减去之前的时间戳，大于设置的时间间隔
        if (Date.now() - previous > wait) {
            clearTimeout(timer)
            timer = null;

            // 更新上一次的时间戳为当前时间戳
            previous = Date.now();

            fn.apply(this, arguments);
        } else if (!timer) {

            // 设置下一个定时器
            timer = setTimeout(() => {
                timer = null;
                fn.apply(this, arguments);
            }, wait)
        }
    }
}

// js使用方法
// window.addEventListener('resize', throttle(function() {}, 200));

// vue使用方法 method是v-on绑定的方法
// methods: { method: throttle(function() {}, 200)}