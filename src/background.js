import { fetchAllReleases } from '@/axios'
import localStorage from './localStorage'

export const RELEASES_STORAGE_KEY = 'releases'
export const NOTIFICATION_COUNT_KEY = 'notificationCount'

browser.browserAction.setBadgeBackgroundColor({ color: '#41b883' })

browser.runtime.onInstalled.addListener(async () => {
  const releases = await fetchAllReleases()
  localStorage.set(RELEASES_STORAGE_KEY, releases)
  localStorage.set(NOTIFICATION_COUNT_KEY, 0)
})

browser.alarms.create('releaseCheck', { periodInMinutes: 0.1 })

browser.alarms.onAlarm.addListener(async alarm => {
  function getLatestIdsString (obj) {
    const valuesArr = Object.values(obj)
    const values = valuesArr.map(ver => ver[0].id)
    return JSON.stringify(values)
  }

  const fetchedReleases = await fetchAllReleases()
  const currReleases = await localStorage.get(RELEASES_STORAGE_KEY)

  const fetchedIds = getLatestIdsString(fetchedReleases)
  const currIds = getLatestIdsString(currReleases)

  if (fetchedIds !== currIds) {
    console.log('version updated!')
    localStorage.set(RELEASES_STORAGE_KEY, fetchedReleases)
    browser.alarms.create('newVersion', { delayInMinutes: 0 })

    let count = await localStorage.get(NOTIFICATION_COUNT_KEY)
    localStorage.set(NOTIFICATION_COUNT_KEY, ++count)

    browser.browserAction.setBadgeText({ text: count.toString() })
  }
})
