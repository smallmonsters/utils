/**
 * 获取当前 URL 二级域名
 * 如果当前是 IP 地址，则直接返回 IP Address
 */
function getSubdomain() {
  try {
    let subdomain = ''
    const key = `mh_${Math.random()}`
    const expiredDate = new Date(0)
    const { domain } = document
    const domainList = domain.split('.')

    const reg = new RegExp(`(^|;)\\s*${key}=12345`)
    const ipAddressReg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/

    // 若为 IP 地址、localhost，则直接返回
    if (ipAddressReg.test(domain) || domain === 'localhost') {
      return domain
    }

    const urlItems = []
    urlItems.unshift(domainList.pop())

    while (domainList.length) {
      urlItems.unshift(domainList.pop())
      subdomain = urlItems.join('.')

      const cookie = `${key}=12345;domain=.${subdomain}`
      document.cookie = cookie

      if (reg.test(document.cookie)) {
        document.cookie = `${cookie};expires=${expiredDate}`
        break
      }
    }

    return subdomain || document.domain
  } catch (e) {
    return document.domain
  }
}