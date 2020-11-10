export function kabobCase (str) {
    return str.replace(/[ \(\)]/g, '-').toLowerCase()
}
