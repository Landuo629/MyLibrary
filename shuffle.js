/**
 * 数组乱序 - 洗牌算法：从最后一个元素开始，从数组中随机选出一个位置，交换，直到第一个元素。
 * @param {array} array - 传入的数组
 * @return {array}   
 */
import verification from './verification.js';
export function shuffle(array) {
    // 参数验证
    if(!verification.isArray(array))
        throw Error("第一个参数必须传递并且类型为数组");

    let current = array.length - 1;
    while (current > -1) {
        // 生成一个范围在当前下标到数组末尾元素下标之间的随机整数
        const random = Math.floor(array.length * Math.random());
        // 将当前元素和随机选出的下标所指的元素互相交换 
        [array[current], array[random]] = [array[random], array[current]];
        current--;
    }
    return array;
};