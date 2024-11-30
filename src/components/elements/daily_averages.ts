export function daily_averages($: cheerio.Root): Array<string> {
  // daily_averages: Averaged Daily Subscribers and Views
  const daily_averages_subs = $("div#averagedailysubs > span").text();
  const daily_averages_views = $("div#averagedailysubs")
    .next()
    .children("span")
    .text();

  return [daily_averages_subs, daily_averages_views];
}
