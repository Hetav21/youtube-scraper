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

export function scrapeData(data: string): void {
  const $ = cheerio.load(data); // Load the HTML data into a cheerio object

  console.log("rank: " + rank($));
  console.log("Youtuber: " + Youtuber($));
  console.log("subscribers: " + subscribers($));
  console.log("video_views: " + video_views($));
  console.log("category: " + category($));
  console.log("Title: " + Title($));
  console.log("uploads: " + uploads($));
  console.log("Abbreviation: " + Abbreviation($));
  console.log("Country: " + Country($));
  console.log("channel_type: " + channel_type($));
  console.log("user created: " + user_created($));
  console.log("subscribers in the last 30 days: " + subscribers_last_30days($));
  console.log("video views in the last 30 days: " + video_views_last_30days($));
  console.log("Daily Averages Subs: " + daily_averages($)[0]);
  console.log("Daily Averages Views: " + daily_averages($)[1]);
  console.log("Weekly Average Subs: " + weekly_averages($)[0]);
  console.log("Weekly Average Views: " + weekly_averages($)[1]);
  console.log("Monthly Average Subs: " + monthly_averages($)[0]);
  console.log("Weekly Average Views: " + monthly_averages($)[1]);
}
