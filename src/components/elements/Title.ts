export function Title($: cheerio.Root): string {
  // Title: Title of the YouTube channel
  const Title = $("h1").text();

  return Title;
}
