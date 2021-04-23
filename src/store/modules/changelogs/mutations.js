import { REFRESH_CHANGELOGS, CLEAR_CHANGELOGS } from './mutation-types'

export default {
  [REFRESH_CHANGELOGS] (state, payload) {
    state.changelogs = payload
  },
  [CLEAR_CHANGELOGS] (state) {
    state.changelogs = []
  }
}
