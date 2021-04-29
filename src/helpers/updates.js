export function generateNewVersionsObj (old, latest) {
  const updatesObj = {}
  let isUpdated = false

  for (const key of Object.keys(latest)) {
    updatesObj[key] = {}
    updatesObj[key].isUpdated = false
    updatesObj[key].name = key
    updatesObj[key].error = false

    if (!Array.isArray(latest[key])) {
      updatesObj[key].version = 'Error loading'
      updatesObj[key].error = true
      continue
    }

    updatesObj[key].version = latest[key][0]?.tag_name

    if (!Array.isArray(old[key])) {
      isUpdated = true
      updatesObj[key].isUpdated = true
      continue
    }

    if (old[key][0]?.id !== latest[key][0]?.id) {
      isUpdated = true
      updatesObj[key].isUpdated = true
    }
  }

  return [isUpdated, updatesObj]
}
