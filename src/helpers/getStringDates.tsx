export function getStringDates(str: string): string {
  return (str.match(/\d{1,2}\/\d{1,2}\/\d{4}/g) || []).join(',');
}
