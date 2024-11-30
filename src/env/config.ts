import path from "path";
import dotenv from "dotenv";

// Parsing the env file.
dotenv.config({ path: path.resolve(__dirname, "./.env") });

// Interface to load env variables
// ENV vars can be undefined so we need to check
interface ENV {
  URL: string | undefined;
}

interface Config {
  URL: string;
}

// Loading process.env as ENV interface
const getConfig = (): ENV => {
  return {
    URL: process.env.URL,
  };
};

// Checking if any field was undefined otherwise
// removes undefined our type definition.

const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in .env`);
    }
  }
  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;
