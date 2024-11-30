export function subscribers_last_30days($: cheerio.Root): string {
  // subscribers_last_30days: Number of subscribers on the YouTube channel in the last 30 days
  const subscribers_last_30days = $("div#socialblade-user-content > div > div")
    .children("p")
    .eq(0)
    .text()
    .trim()
    .split(" ");

  return subscribers_last_30days[0];
}
