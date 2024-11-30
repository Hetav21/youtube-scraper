export function subscribers($: cheerio.Root): string {
  // subscribers: Number of subscribers of the YouTube channel
  const subscribers = $("#youtube-stats-header-subs").text();

  return subscribers;
}
