/**
 * 限制输入框数字大小 注意：vue中使用要将回调延迟到下次 DOM 更新循环之后执行(await this.$nextTick | setTimeout(fn,0))
 * * @param {number | string} number - 限制的参数
 * @param {(number | null)} [Max = Number.MAX_VALUE] - 最大值
 * @param {number} [Min = -Number.MAX_VALUE] - 最小值
 * @return {number}  
 */
import verification from './verification.js';
export function limitSize(number, Max = Number.MAX_VALUE, Min = -Number.MAX_VALUE) {
   if (typeof number === 'string')
       number *= 1;
	if (Max === null)
        Max = Number.MAX_VALUE;
		
    // 参数验证
    verification.isNumber(number);
    verification.isNumber(Max);
    verification.isNumber(Min);
    if(number >= Max) {
        return Max;
    }else if(number <= Min) {
        return Min;
    }else {
        return number;
    }
}
