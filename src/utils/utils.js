/**
 * 是否开发环境
 * @returns {boolean}
 */
export const IS_DEVELOP = () => {
  const { href } = window.location
  const devHostnames = ['localhost', 'h5.benefit.obchuoyuan.com', '192.168']
  return !(devHostnames.findIndex(path => href.includes(path)) === -1)
}

/**
 * 验证正确手机号格式
 * @param phone
 * @returns {boolean}
 * @constructor
 */
export const VERIFY_PHONE = phone => /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(phone)
