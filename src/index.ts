import express, { Express, Request, Response } from "express";
import { CustomError } from "./customError";
import { headers } from "./params/request";
import { fetchData } from "./components/request";
import { scrapeData } from "./components/scrapper";
import config from "./env/config";
import { youtubeIdSchema } from "./schemas/youtubeId";
import { validateHTML } from "./components/validateHTML";

const app: Express = express();
const port = config.PORT;
const url = config.URL;

// Middleware to parse JSON bodies
app.use(express.json());

// Get route to handle request
app.get("/", async (req: Request, res: Response, next: Function) => {
  try {
    const body = req.body;
    const youtubeId = body.youtubeId;

    if (!youtubeIdSchema.safeParse(youtubeId).success) {
      throw new CustomError("Invalid youtubeId", 400);
    }

    const data = await fetchData(url + youtubeId, headers); // Returns HTML

    // Checking if server is returning HTML
    if (!validateHTML(data)) {
      throw new CustomError(
        "API error. Please check .env for a valid API. If using default API, then Please report at: https://github.com/Hetav21/youtube-scraper/issues",
        501,
      );
    }

    res.status(200).json(scrapeData(data));
  } catch (error) {
    next(error);
  }
});

// Error handling middleware
app.use((err: CustomError, req: Request, res: Response, next: Function) => {
  res.status(err.status || 500).json({ error: err.message });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
