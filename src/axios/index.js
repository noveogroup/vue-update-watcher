import axios from 'axios'

const baseUrl = 'https://api.github.com/'
const vueRepo = 'repos/vuejs/vue/releases'

export async function getVueReleases () {
  return await axios.get(baseUrl + vueRepo).data
}
