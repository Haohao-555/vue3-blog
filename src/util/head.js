export function isMobile () {
  const userAgent = navigator.userAgent.toLowerCase()
  if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(userAgent)) {
    return true
  } else {
    return false
  }
}
