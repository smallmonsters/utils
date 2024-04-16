
// 需要配合usePreRouter hock, 见docs/usePreRouter
const getPre = (param) => {
  if (param.url === routerMap.userLogin) {
    const pages = getCurrentPages();
    const preRoute = "/" + pages[pages.length-1].route
    if (param.query) {
      param.query.preRoute = preRoute
    } else {
      param.query = {
        preRoute
      }
    }
  }
}

// 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
export function switchTab(param = {
  url: '',
}) {
  uni.switchTab({
    url: param.url,
    success: param.success,
    fail: param.fail,
    complete: param.complete
  })
}

// 关闭所有页面，打开到应用内的某个页面
export function reLaunch(param = {
  url: '',
  query: {}
}) {
  getPre(param)
  uni.reLaunch({
    url: param.url + formatUrl(param.url, param.query),
    success: param.success,
    fail: param.fail,
    complete: param.complete
  })
}

// 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面
export function redirectTo(param = {
  url: '',
  query: {}
}) {
  uni.redirectTo({
    url: param.url + formatUrl(param.url, param.query),
    success: param.success,
    fail: param.fail,
    complete: param.complete
  })
}

// 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 uni.navigateBack 可以返回到原页面。小程序中页面栈最多十层。
export function navigateTo(param = {
  url: '',
  query: {},
  events: {}
}) {
  const pages = getCurrentPages();
  console.log(pages, "navigateTo")
  if (pages.length >= 10) {
    redirectTo(param);
    return;
  }
  uni.navigateTo({
    url: param.url + formatUrl(param.url, param.query),
    events: param.events,
    success: param.success,
    fail: param.fail,
    complete: param.complete
  })
}

// 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages 获取当前的页面栈，决定需要返回几层。
export function navigateBack(param = {
  delta: 1
}) {
  uni.navigateBack({
    delta: param.delta,
    success: param.success,
    fail: param.fail,
    complete: param.complete
  })
}

// 格式化 URL
// 将 {a:1} => a=1
function formatUrl(initUrl = '', query = {}) {
  // 说明存在参数了，只需要凭借
  let firstCode = '?';
  if (initUrl.indexOf('?') > -1) {
    if (initUrl.slice(-1) === '&') {
      firstCode = ''
    } else {
      firstCode = '&';
    }
  }
  const queryKeys = Object.keys(query);
  let url = '';
  if (queryKeys.length) {
    url = firstCode + queryKeys.map(keys => (keys + '=' + query[keys])).join('&');
  } else {
    url = ''
  }
  return url;
}

export default {
  switchTab,
  reLaunch,
  redirectTo,
  navigateTo,
  navigateBack
}
