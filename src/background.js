import { refreshStorage, init } from './localStorage'

browser.runtime.onInstalled.addListener(() => {
  init()
})

browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log('Hello from the background')
})

browser.alarms.create('myAlarm', { periodInMinutes: 10 })

browser.alarms.onAlarm.addListener(async alarm => {
  console.log('Got an alarm!', alarm)
  refreshStorage()
})
