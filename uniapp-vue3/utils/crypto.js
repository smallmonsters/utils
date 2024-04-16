// // crypto-js 一定要放在node-modules下

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




// import CryptoJS from 'crypto-js'
//
// const SECRET_KEY = CryptoJS.enc.Utf8.parse("maiHuoA1");
//
// /**
//  * 加密方法
//  * @returns {string}
//  */
// export function encrypt(msg) {
//   const dataHex = CryptoJS.enc.Utf8.parse(msg);
//   var encrypted = CryptoJS.AES.encrypt(dataHex, SECRET_KEY, {
//     mode: CryptoJS.mode.ECB,
//     padding: CryptoJS.pad.Pkcs7
//   });
//   return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
// }
//
// /**
//  * 解密方法
//  * @returns {string}
//  */
// export function decrypt(msg) {
//   const encryptedHexStr = CryptoJS.enc.Hex.parse(msg)
//   const str = CryptoJS.enc.Base64.stringify(encryptedHexStr)
//   var decrypted = CryptoJS.AES.decrypt(str, SECRET_KEY, {
//     mode: CryptoJS.mode.ECB,
//     padding: CryptoJS.pad.Pkcs7
//   });
//   return decrypted.toString();
// }
//
//
// // AES128 加密函数
// function aes128Encrypt(hexData, key, iv) {
//   // 将十六进制字符串转换为字节数组
//   var data = CryptoJS.enc.Hex.parse(hexData);
//
//   // 将密钥和 IV（初始向量）转换为字节数组
//   var keyBytes = CryptoJS.enc.Hex.parse(key);
//   var ivBytes = CryptoJS.enc.Hex.parse(iv);
//
//   // 执行 AES-128 加密，使用 CBC 模式和 PKCS7 填充
//   var encrypted = CryptoJS.AES.encrypt(data, keyBytes, {
//     iv: ivBytes,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7
//   });
//
//   // 将加密后的字节数组转换为十六进制字符串
//   var encryptedHex = encrypted.ciphertext.toString();
//
//   return encryptedHex;
// }
//
// // AES128 解密函数
// function aes128Decrypt(encryptedHex, key, iv) {
//   // 将密文的十六进制字符串转换为字节数组
//   var encryptedBytes = CryptoJS.enc.Hex.parse(encryptedHex);
//
//   // 将密钥和 IV（初始向量）转换为字节数组
//   var keyBytes = CryptoJS.enc.Hex.parse(key);
//   var ivBytes = CryptoJS.enc.Hex.parse(iv);
//
//   // 将字节数组转换为加密的参数对象
//   var encryptedData = CryptoJS.lib.CipherParams.create({
//     ciphertext: encryptedBytes
//   });
//
//   // 执行 AES-128 解密，使用 CBC 模式和 PKCS7 填充
//   var decrypted = CryptoJS.AES.decrypt(encryptedData, keyBytes, {
//     iv: ivBytes,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7
//   });
//
//   // 将解密后的字节数组转换为十六进制字符串
//   var decryptedText = decrypted.toString(CryptoJS.enc.Hex);
//   return decryptedText;
// }
//
//
// export function aesDecrypt(encryptedHex) {
//   // 解密
//   //const key = 'suanfaxiaosheng@' // AES 密钥，必须是 16 字节（128 位）
//   const key = "7375616e66617869616f7368656e6740"
//   //const iv = 'suanfaxiaosheng@' // 初始化向量，必须是 16 字节（128 位）
//   const iv = "7375616e66617869616f7368656e6740"
//   const decryptedData = aes128Decrypt(encryptedHex, key, iv)
//   return decryptedData
// }
//
// export function aesEncrypt(hexData) {
//   // 加密
//   const key = 'suanfaxiaosheng@' // AES 密钥，必须是 16 字节（128 位）
//   // const key = "7375616e66617869616f7368656e6740"
//   const iv = 'suanfaxiaosheng@' // 初始化向量，必须是 16 字节（128 位）
//   // const iv = "7375616e66617869616f7368656e6740"
//   const encryptedData = aes128Encrypt(hexData, key, iv)
//   return encryptedData
// }
//
// const a = aesDecrypt(CryptoJS.enc.Hex.parse("123"))
// console.log( a, "aesDecrypt")
