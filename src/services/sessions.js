// sessions helpers for parent portal for viewing schedules and announcements

export function sessionsStep0(records, limit = 476) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function sessionsStep1(records, limit = 335) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function sessionsStep2(records, limit = 289) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function sessionsStep3(records, limit = 438) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function sessionsStep4(records, limit = 293) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function sessionsStep5(records, limit = 127) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function sessionsStep6(records, limit = 484) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function sessionsStep7(records, limit = 221) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function sessionsStep8(records, limit = 481) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function sessionsStep9(records, limit = 213) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
