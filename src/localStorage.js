import { getVueReleases } from '@/axios'
const VUE_RELEASES_STORAGE_KEY = 'vue'

export async function init () {
  const fetchedVueReleases = await getVueReleases()
  console.log(fetchedVueReleases)

  await chrome.storage.local.set({ VUE_RELEASES_STORAGE_KEY: fetchedVueReleases })
  console.log('init')

  const curr = await chrome.storage.local.get(VUE_RELEASES_STORAGE_KEY, () => {})
  console.log('curr data is ', curr)
}

export async function refreshStorage () {
  const currVueReleases = await browser.storage.sync.get(
    VUE_RELEASES_STORAGE_KEY, () => {}
  )
  if (currVueReleases === undefined) {
    init()
    return
  }
  console.log(currVueReleases)

  const fetchedVueReleases = await getVueReleases()
  console.log('f', fetchedVueReleases)

  if (currVueReleases[0] !== fetchedVueReleases[0]) {
    browser.storage.local.set({ VUE_RELEASES_STORAGE_KEY: fetchedVueReleases })
    console.log('wrote to db')
  }
  console.log(fetchedVueReleases)
}
