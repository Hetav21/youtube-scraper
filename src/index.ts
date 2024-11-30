import { headers } from "./params/request";
import { fetchData } from "./components/request";
import { scrapeData } from "./components/scrapper";
import config from "./env/config";

const url = config.URL as string;

async function main() {
  const data = await fetchData(url, headers);
  scrapeData(data);
}

main();
