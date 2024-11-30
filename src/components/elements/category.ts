export function category($: cheerio.Root): string {
  // category: Category of the YouTube channel
  const category = $("#youtube-stats-header-channeltype").text();

  return category;
}
