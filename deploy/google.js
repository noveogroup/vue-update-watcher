const pJSON = require('../package.json')
const fs = require('fs')

const webStore = require('chrome-webstore-upload')({
  extensionId: process.env.GOOGLE_EXTENSION_ID || '',
  clientId: process.env.GOOGLE_CLIENT_ID || '',
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
  refreshToken: process.env.GOOGLE_REFRESH_TOKEN || '',
})

const extZipFilePath = __dirname + `/../artifacts/${pJSON.name}-v${pJSON.version}-production.zip`

const extZipFile = fs.createReadStream(extZipFilePath)

const target = 'trustedTesters'

async function publishExtension () {
  try {
    // Fetch token
    const token = await webStore.fetchToken()
    console.info('Fetch token success')

    // Upload extension
    await webStore.uploadExisting(extZipFile, token)
    console.info('Upload success')

    // Publish extension
    await webStore.publish(target, token)
    console.info('Puplish success')
  } catch (error) {
    console.error('Error: ', error)
  } finally {
    console.info('Finally')
  }
}

publishExtension()
