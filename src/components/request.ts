import axios from "axios";

export async function fetchData(
  url: string,
  headers: Record<string, string>,
): Promise<string> {
  try {
    const response = await axios.get(url, { headers });
    return response.data as string;
  } catch (error) {
    console.error("Error:", error);
    return "";
  }
}
