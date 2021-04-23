import axios from 'axios'

const baseUrl = 'https://api.github.com'

const vueRepoUrl = '/repos/vuejs/vue/releases'
const vuexRepoUrl = '/repos/vuejs/vuex/releases'
const vueRouterRepoUrl = '/repos/vuejs/vue-router/releases'
// const nuxtRepoUrl = '/repos/nuxt/nuxt.js/releases'

async function fetchReleases (repoUrl) {
  try {
    const res = await axios.get(baseUrl + repoUrl)
    return res.data
  } catch (error) {
    console.log('err in axios', error)
    return null
  }
}

const mockRequest = async () => {
  try {
    const res = await axios.get('http://localhost:3001/nuxt')
    return res.data
  } catch (error) {
    console.log('err in axios', error)
    return null
  }
}

export const releaseObjectKeys = ['vue', 'vuex', 'vueRouter', 'nuxt']

export const fetchAllReleases = async () => {
  const res = await axios.all([
    fetchReleases(vueRepoUrl),
    fetchReleases(vuexRepoUrl),
    fetchReleases(vueRouterRepoUrl),
    mockRequest()

    // fetchReleases(nuxtRepoUrl)
  ])

  const obj = {}
  for (const index in res) {
    obj[releaseObjectKeys[index]] = res[index]
  }
  return obj
}
