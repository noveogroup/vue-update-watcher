browser.browserAction.setBadgeBackgroundColor({ color: '#41b883' })

export async function setBadge () {
  browser.browserAction.setBadgeText({ text: '!' })
}

export async function clearBadge () {
  browser.browserAction.setBadgeText({ text: '' })
}
