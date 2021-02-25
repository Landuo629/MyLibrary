/**
 * 现金额大写转换函数
 * @param {number} n - 传入的数字
 * @return {string}   
 */
function toChineseCapitalization(n) {
    const fraction = ['角', '分', '厘'];
    const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    const unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];
    const head = n < 0 ? '负人民币' : '人民币';

    n = Math.abs(n); //指定数字 “n“ 的绝对值
    let s = fraction.reduce((prev, cur, index) => { // 查看数字 ‘n’ 有没有小数点
        return prev + (digit[Math.floor(n * 10 * Math.pow(10, index)) % 10] + cur).replace(/零./, '');
    }, '') || '整';
    n = Math.floor(n); // 向下取整

    for (let i = 0; i < unit[0].length && n > 0; i++) {
        let p = '';
        for (let j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
}

