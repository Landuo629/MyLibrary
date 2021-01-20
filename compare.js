/**
 * 根据数组里对象的某一个值进行排序
 * @param {string} property 用作比较对象的 key 值
 * @param {boolean} [reverse = true] true 升序 false 降序
 */
export function compare(property, reverse = true) {
    // 参数验证
    if (typeof property != 'string')
        throw Error("第一个参数必须是字符串!");
    if (typeof reverse != 'boolean')
        throw Error("第二个参数必须是布尔值!");

    return function(x, y) {
        let value1 = x[property];
        let value2 = y[property];
        return reverse ? value1 - value2 : value2 - value1;
    }
}

// 使用方法
// array.sort(compare(property));