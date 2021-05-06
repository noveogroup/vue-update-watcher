import { defaultSettings } from '@/helpers/constants'

export default {
  releases: {
    vue: [
      {
        tag_name: null,
        body: ''
      }
    ],
    vuex: [
      {
        tag_name: null,
        body: ''
      }
    ],
    vueRouter: [
      {
        tag_name: null,
        body: ''
      }
    ],
    nuxt: [
      {
        tag_name: null,
        body: ''
      }
    ]
  },
  latestVersions: {
    vue: {
      version: null,
      isUpdated: false
    },
    vuex: {
      version: null,
      isUpdated: false
    },
    vueRouter: {
      version: null,
      isUpdated: false
    },
    nuxt: {
      version: null,
      isUpdated: false
    }
  },
  settings: defaultSettings,
  changelogMdFiles: []
}
