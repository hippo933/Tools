/**
 * 防抖函数
 * fn在wait秒内触发多次只执行最后一次
 * @param fn
 * @param wait
 */

function debounce(fn, wait) {
  let timer = null
  return function (...args) {
    const _this = this
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function () {
      fn.apply(_this, args)
      clearTimeout(timer)
    }, wait)
  }
}

export default debounce
