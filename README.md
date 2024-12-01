# YouTube Channel Data Scraper

A YouTube channel scraper that extracts key statistics such as rank, subscribers, views, and more using Axios, Cheerio, and Express. It also tracks performance trends with daily, weekly, and monthly averages.

## Scraping Functions

- **rank**: Extracts the rank of the YouTube channel.
- **youtuber**: Extracts the name of the YouTube channel.
- **subscribers**: Extracts the number of subscribers.
- **video_views**: Extracts the total number of video views.
- **category**: Extracts the category of the YouTube channel.
- **title**: Extracts the title of the YouTube channel.
- **uploads**: Extracts the number of uploads.
- **abbreviation**: Extracts the country abbreviation.
- **country**: Extracts the country of origin.
- **channel_type**: Extracts the type of the channel.
- **user_created**: Extracts the creation date of the user.
- **subscribers_last_30_days**: Extracts the number of subscribers gained in the last 30 days.
- **video_views_last_30_days**: Extracts the number of video views in the last 30 days.
- **daily_averages**: Extracts daily averages for subscribers and views.
- **weekly_averages**: Extracts weekly averages for subscribers and views.
- **monthly_averages**: Extracts monthly averages for subscribers and views.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Hetav21/youtube-scraper.git
   cd youtube-scraper
   ```

2. Install the necessary dependencies:

   ```sh
   npm install
   ```

3. (OPTIONAL) To override default environment variables:
   Create a `.env` file in the `src/env` directory based on the `.env.example` file:

   ```sh
   cp src/env/.env.example src/env/.env
   ```

   Set the `URL` and `PORT` variable in the `src/env/.env` file to the YouTube channel URL you want to scrape.
   For example:

   ```env
   URL=https://socialblade.com/youtube/user/
   PORT=3000
   ```

4. To test the scraper:

   ```sh
   npm run dev
   ```

5. To build and start the scraper, use the following command:

   ```sh
   npm run build
   npm run start
   ```

## Usage

To use the scraper, send a GET request to

```url
http://localhost:3000
```

with the following body parameters:

```url
  {
    "youtubeId": "@channel_name"
  }
```
where `channel_name` is the name of the YouTube channel you want to scrape.

NOTE: Alternatively, the default PORT can be changed using the `.env` file

## Project Structure

- **src/index.ts**: The entry point of the application.
- **src/customError.ts**: Contains a class to create custom error objects.
- **src/env/config.ts**: To load and validate environment variables from `./.env` or set the value to defaults.
- **src/params/request.ts**: Contains the URL and headers for the request.
- **src/params/schemas/**: Directory containing schemas for input validation of the request.
- **src/components/request.ts**: Function to fetch data from the URL.
- **src/components/scrapper.ts**: Main scraping logic.
- **src/components/elements/**: Directory containing functions to extract specific elements from the page.
