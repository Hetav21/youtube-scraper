export function video_views_last_30days($: cheerio.Root): string {
  // video_views_last_30days: Number of views on the YouTube channel in the last 30 days
  const video_views_last_30days = $("div#socialblade-user-content > div > div")
    .children("p")
    .eq(4)
    .text()
    .trim()
    .split(" ");

  return video_views_last_30days[0];
}
