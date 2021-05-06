import localStorage from '@/helpers/localStorage'
import {
  RELEASES_STORAGE_KEY,
  LATEST_VERSIONS_STORAGE_KEY,
  SETTINGS_STORAGE_KEY,
  CHANGELOG_FILES_STORAGE_KEY
} from '@/helpers/constants'
import {
  SET_RELEASES,
  SET_LATEST_VERSIONS,
  SET_SETTINGS,
  SET_CHANGELOGS_MD_FILES
} from './mutation-types'

import badge from '@/background/badge'
import { resetAlarm } from '@/background/alarms'

export default {
  async refreshStorage ({ commit }) {
    const releases = await localStorage.get(RELEASES_STORAGE_KEY)
    commit(SET_RELEASES, releases)

    const latestVersions = await localStorage.get(LATEST_VERSIONS_STORAGE_KEY)
    commit(SET_LATEST_VERSIONS, latestVersions)

    const settings = await localStorage.get(SETTINGS_STORAGE_KEY)
    commit(SET_SETTINGS, settings)

    const changelogMdFiles = await localStorage.get(
      CHANGELOG_FILES_STORAGE_KEY
    )
    commit(SET_CHANGELOGS_MD_FILES, changelogMdFiles)
  },
  async removeNotification ({ state, commit }, key) {
    const latestVersions = await localStorage.get(LATEST_VERSIONS_STORAGE_KEY)
    latestVersions[key].isUpdated = false
    localStorage.set(LATEST_VERSIONS_STORAGE_KEY, latestVersions)
    commit(SET_LATEST_VERSIONS, latestVersions)

    let showBadge = false
    for (const library in state.latestVersions) {
      if (state.latestVersions[library]?.isUpdated) showBadge = true
    }
    showBadge ? badge.set() : badge.clear()
  },
  async setSettings ({ commit }, newSettings) {
    commit(SET_SETTINGS, newSettings)
    await localStorage.set(SETTINGS_STORAGE_KEY, newSettings)
    resetAlarm(newSettings.requestInterval)
  }
}
