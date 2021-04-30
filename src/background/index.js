import { fetchAllReleases } from '@/axios'
import localStorage from '@/helpers/localStorage'
import { generateNewVersionsObj } from '@/helpers/updates'
import './alarms'
import {
  RELEASES_STORAGE_KEY,
  LATEST_VERSIONS_STORAGE_KEY,
  SETTINGS_STORAGE_KEY,
  defaultSettings
} from '@/helpers/constants'

browser.runtime.onInstalled.addListener(async () => {
  const fetchedReleases = await fetchAllReleases()
  await localStorage.set(RELEASES_STORAGE_KEY, fetchedReleases)
  const versions = generateNewVersionsObj(fetchedReleases, fetchedReleases)
  localStorage.set(LATEST_VERSIONS_STORAGE_KEY, versions[1])
  localStorage.set(SETTINGS_STORAGE_KEY, defaultSettings)
})
