/**
 * 限制输入框数字大小 注意：vue中使用要将回调延迟到下次 DOM 更新循环之后执行(await this.$nextTick | setTimeout(fn,0))
 * * @param {number | string} params - 限制的参数
 * @param {(number | null)} [Max = Number.MAX_VALUE] - 最大值
 * @param {number} [Min = -Number.MAX_VALUE] - 最小值
 * @return {number}  
 */
import verification from './verification.js';
export function limitSize(params, Max = Number.MAX_VALUE, Min = -Number.MAX_VALUE) {
    if (Max === null)
        Max = Number.MAX_VALUE;

    // 参数验证
    if (!verification.isNumber(params) && !verification.isString(params))
        throw Error("第一个参数必须传递并且类型为数字或者字符串");
    if (!verification.isNumber(Max))
        throw Error("第二个参数类型必须是数字");
    if (!verification.isNumber(Min))
        throw Error("第三个参数类型必须是数字");

    if (params >= Max) {
        return Max;
    } else if (params <= Min) {
        return Min;
    } else {
        return params;
    }
}
