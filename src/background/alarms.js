import { setBadge } from './badge'
import { fetchAllReleases } from '@/axios'
import localStorage from '@/helpers/localStorage'
import { generateNewVersionsObj } from '@/helpers/updates'
import {
  RELEASES_STORAGE_KEY,
  LATEST_VERSIONS_STORAGE_KEY,
  defaultSettings
} from '@/helpers/constants'
import { showNewReleaseNotification } from './notifications'

export const RELEASE_CHECK_ALARM_NAME = 'releaseCheck'
export const NEW_VERSION_ALARM_NAME = 'newVersion'

browser.alarms.create(RELEASE_CHECK_ALARM_NAME, {
  periodInMinutes: defaultSettings.requestInterval
})

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

    browser.alarms.create(NEW_VERSION_ALARM_NAME, { delayInMinutes: 0 })

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
