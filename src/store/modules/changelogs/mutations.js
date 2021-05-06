import {
  SET_RELEASES,
  SET_LATEST_VERSIONS,
  SET_SETTINGS,
  SET_CHANGELOGS_MD_FILES
} from './mutation-types'

export default {
  [SET_RELEASES] (state, payload) {
    state.releases = payload
  },
  [SET_LATEST_VERSIONS] (state, payload) {
    state.latestVersions = payload
  },
  [SET_SETTINGS] (state, payload) {
    state.settings = payload
  },
  [SET_CHANGELOGS_MD_FILES] (state, payload) {
    state.changelogMdFiles = payload
  }
}
