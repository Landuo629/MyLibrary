/**
 * 验证参数
 * @param {*} params 需要验证的参数
 * @return {throw}
 */
const verification = {
    isFunction(params) {
        if (typeof params != 'function')
            throw Error(`${params}必须是函数`)
    },
    isString(params) {
        if (typeof params !== 'string')
            throw Error(`${params}必须是字符串`)
    },
    isNumber(params) {
        if (typeof params !== 'number')
            throw Error(`${params}必须是数字`)
    },
    isBoolean(params) {
        if (typeof params !== 'boolean')
            throw Error(`${params}必须是布尔值`)
    },
    isQuote(params) {
        if (typeof params !== 'object')
            throw Error(`${params}必须是引用值`)
    },
    isArray(params) {
        if (!Array.isArray()) {
            if (params instanceof Array)
                throw Error(`${params}必须是数组`)
        } else {
            if (Array.isArray(params))
                throw Error(`${params}必须是数组`)
        }
    },
    isObject(params) {
        if (params instanceof Object)
            throw Error(`${params}必须是对象`)
    }
}

export default verification;