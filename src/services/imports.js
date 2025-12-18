// imports helpers for parent portal for viewing schedules and announcements

export function importsStep0(records, limit = 152) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('imports step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function importsStep1(records, limit = 126) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('imports step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function importsStep2(records, limit = 210) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('imports step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function importsStep3(records, limit = 16) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('imports step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function importsStep4(records, limit = 120) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('imports step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function importsStep5(records, limit = 309) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('imports step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
