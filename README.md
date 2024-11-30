# YouTube Channel Scraper

This project is a YouTube channel scraper that extracts various statistics and information from a YouTube channel page using Cheerio and Axios.

## Scraping Functions

- rank: Extracts the rank of the YouTube channel.
- Youtuber: Extracts the name of the YouTube channel.
- subscribers: Extracts the number of subscribers.
- video_views: Extracts the number of video views.
- category: Extracts the category of the YouTube channel.
- Title: Extracts the title of the YouTube channel.
- uploads: Extracts the number of uploads.
- Abbreviation: Extracts the country abbreviation.
- Country: Extracts the country of origin.
- channel_type: Extracts the type of the channel.
- user_created: Extracts the creation date of the user.
- subscribers_last_30days: Extracts the number of subscribers in the last 30 days.
- video_views_last_30days: Extracts the number of video views in the last 30 days.
- daily_averages: Extracts daily averages of subscribers and views.
- weekly_averages: Extracts weekly averages of subscribers and views.
- monthly_averages: Extracts monthly averages of subscribers and views.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Hetav21/youtube-scraper.git
   cd youtube-scraper
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the `src/env` directory based on the `.env.example` file:

   ```sh
   cp src/env/.env.example src/env/.env
   ```

4. Set the `URL` variable in the `src/env/.env` file to the YouTube channel URL you want to scrape.
   For example:

   ```env
   URL=https://socialblade.com/youtube/user/@mrbeast
   ```

5. Test the scraper:

   ```sh
   npm run dev
   ```

## Usage

To build the scraper, use the following command:

```sh
npm run build
```

To start the scraper, use the following command:

```sh
npm run start
```

## Project Structure

- src/index.ts: Entry point of the application.
- src/env/config.ts: Configuration file for loading environment variables.
- src/params/request.ts: Contains the URL and headers for the request.
- src/components/request.ts: Function to fetch data from the URL.
- src/components/scrapper.ts: Main scraping logic.
- src/components/elements/: Directory containing functions to extract specific elements from the page.
