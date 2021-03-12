/**
 * 验证参数
 * @param {*} params 需要验证的参数
 * @return {throw}
 */
const verification = {
    isString(params) { //是否字符串
        return Object.prototype.toString.call(params).slice(8, -1) === 'String'
    },

    isNumber(params) { //是否数字
        return Object.prototype.toString.call(params).slice(8, -1) === 'Number'
    },

    isBoolean(params) { //是否boolean
        return Object.prototype.toString.call(params).slice(8, -1) === 'Boolean'
    },

    isFunction(params) { //是否函数
        return Object.prototype.toString.call(params).slice(8, -1) === 'Function'
    },

    isNull(params) { //是否为null
        return Object.prototype.toString.call(params).slice(8, -1) === 'Null'
    },

    isUndefined(params) { //是否undefined
        return Object.prototype.toString.call(params).slice(8, -1) === 'Undefined'
    },

    isObj(params) { //是否对象
        return Object.prototype.toString.call(params).slice(8, -1) === 'Object'
    },

    isArray(params) { //是否数组
        return Object.prototype.toString.call(params).slice(8, -1) === 'Array'
    },

    isDate(params) { //是否时间
        return Object.prototype.toString.call(params).slice(8, -1) === 'Date'
    },

    isRegExp(params) { //是否正则
        return Object.prototype.toString.call(params).slice(8, -1) === 'RegExp'
    },

    isError(params) { //是否错误对象
        return Object.prototype.toString.call(params).slice(8, -1) === 'Error'
    },

    isSymbol(params) { //是否Symbol函数
        return Object.prototype.toString.call(params).slice(8, -1) === 'Symbol'
    },

    isPromise(params) { //是否Promise对象
        return Object.prototype.toString.call(params).slice(8, -1) === 'Promise'
    },

    isSet(params) { //是否Set对象
        return Object.prototype.toString.call(params).slice(8, -1) === 'Set'
    },

    isFalse(params) {
        if (!o || o === 'null' || o === 'undefined' || o === 'false' || o === 'NaN') return true
        return false
    },

    isTrue(params) {
        return !this.isFalse(params)
    },

    isIos() {
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

    isPC() { //是否为PC端
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

export default verification;


