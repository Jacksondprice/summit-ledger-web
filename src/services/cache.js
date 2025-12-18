// cache helpers for parent portal for viewing schedules and announcements

export function cacheStep0(records, limit = 315) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep1(records, limit = 45) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep2(records, limit = 406) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep3(records, limit = 165) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep4(records, limit = 118) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep5(records, limit = 19) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep6(records, limit = 165) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep7(records, limit = 171) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep8(records, limit = 413) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep9(records, limit = 64) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
