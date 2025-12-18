// rostering helpers for parent portal for viewing schedules and announcements

export function rosteringStep0(records, limit = 216) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep1(records, limit = 498) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep2(records, limit = 187) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep3(records, limit = 394) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep4(records, limit = 139) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep5(records, limit = 388) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep6(records, limit = 47) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep7(records, limit = 154) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep8(records, limit = 239) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
