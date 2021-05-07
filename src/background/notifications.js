import localStorage from '@/helpers/localStorage'
import { SETTINGS_STORAGE_KEY } from '@/constants'

export async function showNewReleaseNotification (releaseName) {
  const notificationSettings = await localStorage.get(SETTINGS_STORAGE_KEY)
  if (!notificationSettings.notifications) return

  browser.notifications.create('', {
    title: `New version for ${releaseName} was just released!`,
    message: 'Check it out in Vue Watcher',
    iconUrl: '/icons/128.png',
    type: 'basic',
    silent: notificationSettings.silentMode || false
  })
}
