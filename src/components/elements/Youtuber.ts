export function Youtuber($: cheerio.Root): string {
  // Youtuber: Name of the YouTube channel
  const Youtuber = $("h4").text();

  return Youtuber;
}
