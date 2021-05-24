import axios from 'axios'
import { releaseObjectKeys } from '@/constants'
import urls from './urls'

async function fetchData (repoUrl) {
  try {
    const res = await axios.get(urls.base + repoUrl)
    return res.data
  } catch (error) {
    console.error('err in axios', error)
    return null
  }
}

const generateObject = (arr) => {
  const obj = {}
  for (const index in arr) {
    obj[releaseObjectKeys[index]] = arr[index]
  }
  return obj
}

export const fetchAllReleases = async () => {
  const res = await axios.all([
    fetchData(urls.vueRepo),
    fetchData(urls.vuexRepo),
    fetchData(urls.vueRouterRepo),
    fetchData(urls.nuxtRepo)
  ])
  return generateObject(res)
}

export const fetchAllChangelogFiles = async () => {
  const res = await axios.all([
    fetchData(urls.vueChangelogFile),
    fetchData(urls.vuexChangelogFile),
    fetchData(urls.vueRouterChangelogFile),
    fetchData(urls.nuxtChangelogFile)
  ])
  return generateObject(res)
}
