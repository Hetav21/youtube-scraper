export function monthly_averages($: cheerio.Root): Array<string> {
  // monthly_averages: Averaged Monthly Subscribers and Views

  const monthly_averages_subs = $("div#averagedailysubs")
    .parent()
    .next()
    .next()
    .children("div")
    .eq(1)
    .children("span")
    .text();

  const monthly_averages_views = $("div#averagedailysubs")
    .parent()
    .next()
    .next()
    .children("div")
    .eq(2)
    .children("span")
    .text();

  return [monthly_averages_subs, monthly_averages_views];
}
