chrome.runtime.onInstalled.addListener(() => {
  browser.browserAction.setBadgeBackgroundColor({ color: '#41b883' })
})

export default {
  set () {
    browser.browserAction.setBadgeText({ text: '!' })
  },
  clear () {
    browser.browserAction.setBadgeText({ text: '' })
  }
}
