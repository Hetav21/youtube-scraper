export function channel_type($: cheerio.Root): string {
  // channel_type: Type of the YouTube channel
  const channel_type = $("#youtube-stats-header-channeltype").text();

  return channel_type;
}
