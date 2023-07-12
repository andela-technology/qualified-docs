export function kabobCase(str) {
  return str.replace(/[ \(\)]/g, '-').toLowerCase();
}

export function camelCase(str) {
  return str.replace(/_(\w)/g, (_, v) => v.toUpperCase());
}
