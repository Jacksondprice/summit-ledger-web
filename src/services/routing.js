// routing helpers for parent portal for viewing schedules and announcements

export function routingStep0(records, limit = 413) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep1(records, limit = 460) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep2(records, limit = 184) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep3(records, limit = 68) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep4(records, limit = 309) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep5(records, limit = 259) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep6(records, limit = 258) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep7(records, limit = 430) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep8(records, limit = 241) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep9(records, limit = 387) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
