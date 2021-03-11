/**
 * 返回当前的时间（年月日时分秒）
 * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
 * 栗子： 
 *      format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
 *      format("yy-M-d h:m:s.S")      ==> 06-7-2 8:9:4.18
 * @param {string} [fmt = 'yyyy-MM-dd hh:mm:ss'] -时间格式   
 * @return {string}
 */
import verification from './verification.js';
export function format(fmt = 'yyyy-MM-dd hh:mm:ss') {
    // 参数验证
    verification.isString(fmt);

    const date = new Date();
    const dateList = {
        "M+": date.getMonth() + 1,                      //月份 
        "d+": date.getDate(),                           //日 
        "h+": date.getHours(),                          //小时 
        "m+": date.getMinutes(),                        //分 
        "s+": date.getSeconds(),                        //秒 
        "q+": Math.floor((date.getMonth() + 3) / 3),    //季度 
        "S": date.getMilliseconds()                     //毫秒 
    };

    if (/(y+)/.test(fmt)) // 匹配年份
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));

    for (var k in dateList)      // 匹配其他参数
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (dateList[k]) : (("00" + dateList[k]).substr(("" + dateList[k]).length)));
   
    return fmt;
}