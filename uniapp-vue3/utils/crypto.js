/**
 * 安装插件 https://ext.dcloud.net.cn/plugin?id=13351 or yarn add crypto-js
 * crypto-js 一定要放在node-modules下
 * 使用DES 加密解密
 */

import CryptoJS from 'crypto-js'
// 秘钥
export function getKey(){
  return  CryptoJS.enc.Utf8.parse('48CDABaa')
}
// 偏移量
export function getIv(){
  return CryptoJS.enc.Utf8.parse('0672DEaa')
}
/*加密*/
export function encrypt(data) {
  const message = CryptoJS.enc.Utf8.parse(data);
  var ciphertext = CryptoJS.DES.encrypt(message, getKey(), {
    iv: getIv(),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return ciphertext.toString();
}
/*解密*/
export function decrypt(data) {
  var bytes = CryptoJS.DES.decrypt(data.toString(), getKey(), {
    iv: getIv(),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return bytes.toString(CryptoJS.enc.Utf8);
}

// 使用
let a = encrypt('oopppooo')
// //解密
let b = decrypt(a)
console.log(a)
console.log(b)
