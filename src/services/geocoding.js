// geocoding helpers for parent portal for viewing schedules and announcements

export function geocodingStep0(records, limit = 60) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep1(records, limit = 72) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep2(records, limit = 52) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep3(records, limit = 352) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep4(records, limit = 392) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep5(records, limit = 159) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep6(records, limit = 278) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep7(records, limit = 325) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep8(records, limit = 457) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep9(records, limit = 394) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep10(records, limit = 317) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 10', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
