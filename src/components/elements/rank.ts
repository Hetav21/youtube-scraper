export function rank($: cheerio.Root): number {
  // rank: Position of the YouTube channel based on the number of subscribers
  const rankWithSuffix = $(
    "div#socialblade-user-content > div > div > div > div ",
  )
    .children("p")
    .children("span:eq(1)")
    .text()
    .trim();

  const rank = parseInt(rankWithSuffix.slice(0, rankWithSuffix.length - 2));

  return rank;
}
