// inventory helpers for parent portal for viewing schedules and announcements

export function inventoryStep0(records, limit = 132) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function inventoryStep1(records, limit = 197) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function inventoryStep2(records, limit = 330) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function inventoryStep3(records, limit = 101) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function inventoryStep4(records, limit = 156) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function inventoryStep5(records, limit = 399) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function inventoryStep6(records, limit = 405) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function inventoryStep7(records, limit = 127) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function inventoryStep8(records, limit = 376) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function inventoryStep9(records, limit = 410) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
