export function sortBy(values, field, field2) {
  return [...values].sort((a, b) => {
    const result = sortValue(a, b, field);
    return field2 ? result || sortValue(a, b, field2) : result;
  });
}

export function sortValue(aObj, bObj, field) {
  let a = aObj && aObj[field];
  let b = bObj && bObj[field];
  if (typeof field === "function") {
    a = field(aObj);
    b = field(bObj);
  }

  if (typeof a === "string" || typeof b === "string") {
    if (a === b) return 0;
    return a < b ? -1 : 1;
  } else {
    return a - b;
  }
}

export function groupBy(values, field) {
  const result = {};
  values.forEach((value) => {
    result[value[field]] = result[value[field]] || [];
    result[value[field]].push(value);
  });

  return result;
}
