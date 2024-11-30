export function uploads($: cheerio.Root): string {
  // uploads: Number of videos uploaded on the YouTube channel
  const uploads = $("#youtube-stats-header-uploads").text();

  return uploads;
}
