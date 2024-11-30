export function video_views($: cheerio.Root): string {
  // video views: Number of views of the YouTube channel
  const video_views = $("#youtube-stats-header-views").text();

  return video_views;
}
