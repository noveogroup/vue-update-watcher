import { fetchAllReleases } from '@/axios'
import localStorage from '@/helpers/localStorage'
import { generateNewVersionsObj } from '@/helpers/updates'
import { setBadge } from './badge'

export const RELEASES_STORAGE_KEY = 'releases'
export const LATEST_VERSIONS_STORAGE_KEY = 'newVersions'

browser.runtime.onInstalled.addListener(async () => {
  const fetchedReleases = await fetchAllReleases()
  await localStorage.set(RELEASES_STORAGE_KEY, fetchedReleases)
  const versions = generateNewVersionsObj(fetchedReleases, fetchedReleases)
  localStorage.set(LATEST_VERSIONS_STORAGE_KEY, versions[1])
})

browser.alarms.create('releaseCheck', { periodInMinutes: 0.2 })

browser.alarms.onAlarm.addListener(async alarm => {
  const fetchedReleases = await fetchAllReleases()
  const currReleases = await localStorage.get(RELEASES_STORAGE_KEY)

  const [isUpdated, latestVersions] = generateNewVersionsObj(
    currReleases,
    fetchedReleases
  )

  if (isUpdated) {
    await localStorage.set(RELEASES_STORAGE_KEY, fetchedReleases)
    await localStorage.set(LATEST_VERSIONS_STORAGE_KEY, latestVersions)
    setBadge()

    browser.alarms.create('newVersion', { delayInMinutes: 0 })

    const newName = Object.values(latestVersions).filter(repo => repo.isUpdated === true)[0]?.name || 'Vue'
    const capitalizedName = newName.charAt(0).toUpperCase() + newName.slice(1)
    chrome.notifications.create('', {
      title: `New version for ${capitalizedName} was just released!`,
      message: 'Check it out in Vue Watcher',
      iconUrl: '/icons/128.png',
      type: 'basic',
      silent: true
    })
  }
})
