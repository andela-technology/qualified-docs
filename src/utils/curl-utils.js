export function buildCurlCommand(method, route, { headers = {}, data } = {}) {
  const segs = [
    `curl --request ${method.toUpperCase()}`,
    `--url https://www.qualified.io/api${route}`,
  ];

  for (const [key, value] of Object.entries(headers)) {
    segs.push(`--header '${key}: ${value}'`);
  }

  if (data) {
    segs.push(`--data '${data}'`);
  }

  return "# Example Request \n" + segs.join(" \\\n     ");
}
