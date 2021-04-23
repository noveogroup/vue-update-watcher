export default {
  async get (key) {
    const res = await browser.storage.local.get([key])
    return JSON.parse(res[key])
  },
  set (key, payload) {
    browser.storage.local.set({ [key]: JSON.stringify(payload) })
  },
  remove (key) {
    browser.storage.local.remove(key)
  },
  clear () {
    browser.storage.local.clear()
  }
}
