// 在ts项目中可以复制helper.d.ts定义文件
export const isMap = (val) => toTypeString(val) === '[object Map]';
export const isSet = (val) => toTypeString(val) === '[object Set]';
export const isDate = (val) => toTypeString(val) === '[object Date]';
export const isFunction = (val) => typeof val === 'function';
export const isString = (val) => typeof val === 'string';
export const isSymbol = (val) => typeof val === 'symbol';
export const isObject = (val) => val !== null && typeof val === 'object';
export const isPromise = (val) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
