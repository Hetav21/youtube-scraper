export function Abbreviation($: cheerio.Root): string {
  // Abbreviation: Abbreviation of the country of origin of the YouTube channel
  const Abbreviation = $("#youtube-stats-header-country").text();

  return Abbreviation;
}
