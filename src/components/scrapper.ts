import * as cheerio from "cheerio";
import { rank } from "./elements/rank";
import { Youtuber } from "./elements/Youtuber";
import { subscribers } from "./elements/subscribers";
import { Abbreviation } from "./elements/Abbreviation";
import { category } from "./elements/category";
import { video_views } from "./elements/video_views";
import { uploads } from "./elements/uploads";
import { Title } from "./elements/Title";
import { Country } from "./elements/Country";
import { channel_type } from "./elements/channel_type";
import { user_created } from "./elements/user_created";
import { subscribers_last_30days } from "./elements/subscribers_last_30days";
import { video_views_last_30days } from "./elements/video_views_last_30days";
import { daily_averages } from "./elements/daily_averages";
import { weekly_averages } from "./elements/weekly_averages";
import { monthly_averages } from "./elements/monthly_averages";

export function scrapeData(data: string): string {
  const $ = cheerio.load(data); // Load the HTML data into a cheerio object

  const scrapedData = {
    rank: rank($),
    youtuber: Youtuber($),
    subscribers: subscribers($),
    videos_views: video_views($),
    category: category($),
    title: Title($),
    uploads: uploads($),
    abbreviation: Abbreviation($),
    country: Country($),
    channel_type: channel_type($),
    user_created: user_created($),
    subscribers_last_30days: subscribers_last_30days($),
    video_views_last_30days: video_views_last_30days($),
    daily_averages: {
      subscribers: daily_averages($)[0],
      views: daily_averages($)[1],
    },
    weekly_averages: {
      subscribers: weekly_averages($)[0],
      views: weekly_averages($)[1],
    },
    monthly_averages: {
      subscribers: monthly_averages($)[0],
      views: monthly_averages($)[1],
    },
  };

  return JSON.stringify(scrapedData);
}
