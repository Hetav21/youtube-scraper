import { Abbreviation } from "./Abbreviation";

export function Country($: cheerio.Root): string {
  // Country: Country of origin of the YouTube channel
  const abbr = Abbreviation($);

  const Country =
    $(`[href=/youtube/top/country/${abbr.toLowerCase()}] > img`).attr(
      "title",
    ) || abbr;

  return Country;
}
