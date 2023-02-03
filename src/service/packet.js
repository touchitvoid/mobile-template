import service from '@/utils/request'

/**
 * IP限制检测
 * @returns {*}
 * @constructor
 * @param params
 */
export const IsLimit = params => service({
  url: 'config/isLimitCity.do',
  method: 'get',
  params
})

/**
 * 签约提示
 * @param data
 * @returns {*}
 * @constructor
 */
export const GetSignInfo = data => service({
  url: 'user/user/getSignInfo.do',
  method: 'post',
  data
})

/**
 * 日志回报
 * @param data
 * @returns {*}
 * @constructor
 */
export const LogRecord = data => service({
  url: 'test/logRecord.do',
  method: 'post',
  data
})
