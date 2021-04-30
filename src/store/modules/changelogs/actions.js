import localStorage from '@/helpers/localStorage'
import {
  RELEASES_STORAGE_KEY,
  LATEST_VERSIONS_STORAGE_KEY,
  SETTINGS_STORAGE_KEY
} from '@/helpers/constants'
import {
  REFRESH_CHANGELOGS,
  REFRESH_LATEST_VERSIONS,
  REFRESH_SETTINGS
} from './mutation-types'
import { setBadge, clearBadge } from '@/background/badge'
import { resetAlarm } from '@/background/alarms'

export default {
  async init ({ commit }) {
    const releases = await localStorage.get(RELEASES_STORAGE_KEY)
    const latestVersions = await localStorage.get(LATEST_VERSIONS_STORAGE_KEY)
    const settings = await localStorage.get(SETTINGS_STORAGE_KEY)
    commit(REFRESH_SETTINGS, settings)
    commit(REFRESH_LATEST_VERSIONS, latestVersions)
    commit(REFRESH_CHANGELOGS, releases)
  },
  async refreshStorage ({ commit }) {
    const currReleases = await localStorage.get(RELEASES_STORAGE_KEY)
    const latestVersions = await localStorage.get(LATEST_VERSIONS_STORAGE_KEY)
    if (currReleases === undefined) {
      this.init()
      return
    }
    commit(REFRESH_CHANGELOGS, currReleases)
    commit(REFRESH_LATEST_VERSIONS, latestVersions)
  },
  async removeNotification ({ state, commit }, key) {
    const latestVersions = await localStorage.get(LATEST_VERSIONS_STORAGE_KEY)
    latestVersions[key].isUpdated = false
    localStorage.set(LATEST_VERSIONS_STORAGE_KEY, latestVersions)
    commit(REFRESH_LATEST_VERSIONS, latestVersions)

    let showBadge = false
    for (const library in state.latestVersions) {
      if (state.latestVersions[library]?.isUpdated) showBadge = true
    }
    showBadge ? setBadge() : clearBadge()
  },
  async setSettings ({ commit }, newSettings) {
    commit(REFRESH_SETTINGS, newSettings)
    await localStorage.set(SETTINGS_STORAGE_KEY, newSettings)
    resetAlarm(newSettings.requestInterval)
  }
}
