import { fetchVueReleases } from '@/axios'
import localStorage from '@/localStorage'
import { RELEASES_STORAGE_KEY } from '@/background'
import { REFRESH_CHANGELOGS } from './mutation-types'

export default {
  async init (state) {
    const releases = await localStorage.get(RELEASES_STORAGE_KEY)
    state.commit(REFRESH_CHANGELOGS, releases)
  },
  async refreshStorage ({ commit }) {
    const currVueReleases = await localStorage.get(RELEASES_STORAGE_KEY)
    if (currVueReleases === undefined) {
      this.init()
      return
    }
    const fetchedVueReleases = await fetchVueReleases()
    if (currVueReleases[0] !== fetchedVueReleases[0]) {
      localStorage.set({ RELEASES_STORAGE_KEY, fetchedVueReleases })
      commit(REFRESH_CHANGELOGS, fetchedVueReleases)
    }
  }
}
