// reports helpers for parent portal for viewing schedules and announcements

export function reportsStep0(records, limit = 289) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep1(records, limit = 194) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep2(records, limit = 343) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep3(records, limit = 449) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep4(records, limit = 35) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep5(records, limit = 153) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
