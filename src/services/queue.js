// queue helpers for parent portal for viewing schedules and announcements

export function queueStep0(records, limit = 40) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function queueStep1(records, limit = 404) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function queueStep2(records, limit = 239) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function queueStep3(records, limit = 204) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function queueStep4(records, limit = 138) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function queueStep5(records, limit = 369) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function queueStep6(records, limit = 152) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
