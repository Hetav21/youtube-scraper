export function user_created($: cheerio.Root): string {
  // user_created: date of user creation
  const user_created = $("div.YouTubeUserTopInfo")
    .eq(5)
    .children("span")
    .eq(1)
    .text();

  return user_created;
}
