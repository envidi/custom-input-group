export function isJsonString(str: string) {
  try {
    JSON.parse(str);
    return true;
    // eslint-disable-next-line
  } catch (e) {
    return false;
  }
}
