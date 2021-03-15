/**
 * 验证参数
 * @param {*} params 需要验证的参数
 * @return {Boolean}
 */
const verification = {
    isString(params) { //字符串
        return _typeof(params) === 'String'
    },

    isNumber(params) { //数字
        return _typeof(params) === 'Number'
    },

    isBoolean(params) { //Boolean
        return _typeof(params) === 'Boolean'
    },

    isFunction(params) { //函数
        return _typeof(params) === 'Function'
    },

    isNull(params) { //null
        return _typeof(params) === 'Null'
    },

    isUndefined(params) { //undefined
        return _typeof(params) === 'Undefined'
    },

    isObj(params) { //对象
        return _typeof(params) === 'Object'
    },

    isArray(params) { //数组
        return _typeof(params) === 'Array'
    },

    isDate(params) { //时间
        return _typeof(params) === 'Date'
    },

    isRegExp(params) { //正则
        return _typeof(params) === 'RegExp'
    },

    isError(params) { //错误对象
        return _typeof(params) === 'Error'
    },

    isSymbol(params) { //Symbol函数
        return _typeof(params) === 'Symbol'
    },

    isPromise(params) { //Promise对象
        return _typeof(params) === 'Promise'
    },

    isSet(params) { //Set对象
        return _typeof(params) === 'Set'
    },

    isFalse(params) { // False
        if (!o || o === 'null' || o === 'undefined' || o === 'false' || o === 'NaN') return true
        return false
    },

    isTrue(params) { //True
        return !this.isFalse(params)
    },

    isEmail(params) { //邮箱
        return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(params);
    },

    isMobile(params) { //电话号码
        return /^1[0-9]{10}$/.test(params)
    },

    isPhone(params) { //手机号码
        return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(params)
    },

    isURL(URL) { //URL地址
        return /^http[s]?:\/\/.*/.test(URL)
    },


    validateLowerCase(str) { // 小写字母 
        return /^[a-z]+$/.test(str)
    },

    validateUpperCase(str) { // 大写字母 
        return /^[A-Z]+$/.test(str)
    },

    validatAlphabets(str) { // 大小写字母 
        return /^[A-Za-z]+$/.test(str)
    },

    isIos() { // ios or 安卓
        var u = navigator.userAgent;
        if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
            // return "Android";
            return false
        } else if (u.indexOf('iPhone') > -1) {//苹果手机
            // return "iPhone";
            return true
        } else if (u.indexOf('iPad') > -1) {//iPad
            // return "iPad";
            return false
        } else if (u.indexOf('Windows Phone') > -1) {//winphone手机
            // return "Windows Phone";
            return false
        } else {
            return false
        }
    },

    isPC() { //为PC端
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone",
            "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }
}

/**
 * @param {*} params 需要验证的参数
 * @return {String}
 */
function _typeof(params) {
    return Object.prototype.toString.call(params).slice(8, -1)
}

export default verification;


