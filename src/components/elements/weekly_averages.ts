export function weekly_averages($: cheerio.Root): Array<string> {
  // weekly_averages: Weekly Averages Subscribers and Views
  const weekly_averages_subs = $("div#averagedailysubs")
    .parent()
    .next()
    .children("div")
    .eq(1)
    .children("span")
    .text();

  const weekly_averages_views = $("div#averagedailysubs")
    .parent()
    .next()
    .children("div")
    .eq(2)
    .children("span")
    .text();

  return [weekly_averages_subs, weekly_averages_views];
}
