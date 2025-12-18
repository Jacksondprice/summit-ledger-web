// exports helpers for parent portal for viewing schedules and announcements

export function exportsStep0(records, limit = 203) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('exports step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function exportsStep1(records, limit = 276) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('exports step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function exportsStep2(records, limit = 144) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('exports step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function exportsStep3(records, limit = 90) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('exports step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function exportsStep4(records, limit = 259) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('exports step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function exportsStep5(records, limit = 330) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('exports step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
