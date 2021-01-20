/**
 * 根据数组里对象的某一个值进行排序
 * @param {string} property 用作比较对象的 key 值
 * @param {boolean} [reverse = false] 执行升序还是降序
 */
export function compare(property, reverse = false) {
    // 参数验证
    if (typeof wait != 'number')
        throw new Error("第一个参数必须是数字!");
    if (typeof immediate != 'boolean')
        throw new Error("第二个参数必须是布尔值!");

    return function(x, y) {
        let value1 = x[property];
        let value2 = y[property];
        return reverse ? value1 - value2 : value2 - value1;
    }
}

// 使用方法
// array.sort(compare(property));