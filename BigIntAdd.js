/**
 * 两个大数相加
 * @param {string} a 数字
 * @param {string} b 数字
 * @return {string}
 */
function BigIntAdd(a ,b){
    //取两个数字的最大长度
    let maxLength = Math.max(a.length, b.length);
    //用0去补齐前面长度
    a = a.padStart(maxLength, 0);
    b = b.padStart(maxLength, 0);

    //定义加法过程中需要用到的变量
    let t = 0;
    let f = 0;   //"进位"
    let sum = ""; //"总数"

    for(let i = maxLength - 1; i >= 0; i--){
       t = parseInt(a[i], 10) + parseInt(b[i], 10) + f;
       f = Math.floor(t/10);
       sum = t%10 + sum;
    }
    
    if(f == 1) // 如果最后一次进位的情况下在字符串头部加一
       sum = "1" + sum;

    return sum;
 }



 /**
  * 字符串方法
 * padStart(len, str) || padEnd(len, str)
 * 根据给定长度自动在字符串的前面(后面)补充想补充的字符串（只返回修改后的字符串，不修改原字符串）
 * @param {number} len 给定的长度，转换后
 * @param {string} str 想补充的字符串
 * @return {string}
 */