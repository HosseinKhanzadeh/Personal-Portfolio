export function isHttpUrl(url: string): boolean {
  return /^https?:\/\//i.test(url);
}
