import {
  REFRESH_CHANGELOGS,
  CLEAR_CHANGELOGS,
  REFRESH_LATEST_VERSIONS,
  REFRESH_SETTINGS
} from './mutation-types'

export default {
  [REFRESH_CHANGELOGS] (state, payload) {
    state.changelogs = payload
  },
  [CLEAR_CHANGELOGS] (state) {
    state.changelogs = []
  },
  [REFRESH_LATEST_VERSIONS] (state, payload) {
    state.latestVersions = payload
  },
  [REFRESH_SETTINGS] (state, payload) {
    state.settings = payload
  }
}
