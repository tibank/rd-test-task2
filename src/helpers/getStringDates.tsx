export function getStringDates(str: string): string {
    return (str.match(/\d{2}\/\d{2}\/\d{4}/g) || []).join(',');
}
