import badge from './badge'
import { fetchAllReleases, fetchAllChangelogFiles } from '@/axios'
import localStorage from '@/helpers/localStorage'
import { generateNewVersionsObj } from '@/helpers/updates'
import {
  RELEASES_STORAGE_KEY,
  LATEST_VERSIONS_STORAGE_KEY,
  RELEASE_CHECK_ALARM_NAME,
  CHANGELOG_FILES_STORAGE_KEY,
  requestIntervalDefault
} from '@/constants'

import { showNewReleaseNotification } from './notifications'

chrome.runtime.onInstalled.addListener(reason => {
  browser.alarms.create(RELEASE_CHECK_ALARM_NAME, {
    periodInMinutes: requestIntervalDefault
  })
})

browser.alarms.onAlarm.addListener(async alarm => {
  if (alarm.name !== RELEASE_CHECK_ALARM_NAME) return
  const fetchedReleases = await fetchAllReleases()
  const currReleases = await localStorage.get(RELEASES_STORAGE_KEY)

  const [isUpdated, latestVersions] = generateNewVersionsObj(
    currReleases,
    fetchedReleases
  )

  if (isUpdated) {
    await localStorage.set(RELEASES_STORAGE_KEY, fetchedReleases)
    await localStorage.set(LATEST_VERSIONS_STORAGE_KEY, latestVersions)
    badge.set()

    const changelogFiles = await fetchAllChangelogFiles()
    localStorage.set(CHANGELOG_FILES_STORAGE_KEY, changelogFiles)

    const newName =
      Object.values(latestVersions).filter(repo => repo.isUpdated === true)[0]
        ?.name || 'Vue'
    const capitalizedName = newName.charAt(0).toUpperCase() + newName.slice(1)
    showNewReleaseNotification(capitalizedName)
  }
})

export async function resetAlarm (newPeriod) {
  await browser.alarms.clear(RELEASE_CHECK_ALARM_NAME)
  browser.alarms.create(RELEASE_CHECK_ALARM_NAME, {
    periodInMinutes: newPeriod
  })
}
