export function checkNewVersions (old, latest) {
  let isUpdated = false
  const updatesObj = {}

  for (const key of Object.keys(latest)) {
    updatesObj[key] = {}
    updatesObj[key].version = latest[key][0]?.tag_name
    updatesObj[key].name = key
    if (old[key][0]?.id !== latest[key][0]?.id) {
      isUpdated = true
      updatesObj[key].isUpdated = true
      continue
    }
    updatesObj[key].isUpdated = false
  }

  return [isUpdated, updatesObj]
}
