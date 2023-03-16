import axios from "axios";
import cheerio from "cheerio";
import { ISearchTrackResponse } from "./interfaces.js";

async function fetchTrackData(query: string, accessToken: string, limit: number) {
  query = query.split(" ").join("+");

  const url = "https://api-partner.spotify.com/pathfinder/v1/query";
  const params = {
    operationName: "searchDesktop",
    variables: `{"searchTerm":"${query}","offset":0,"limit":${limit},"numberOfTopResults":5,"includeAudiobooks":true}`,
    extensions:
      '{"persistedQuery":{"version":1,"sha256Hash":"1d3a8f81abf4f33f49d1e389ed0956761af669eedb62a050c6c7bce5c66070bb"}}',
  };
  const headers = { authorization: "Bearer " + accessToken };
  const response = await axios.get<ISearchTrackResponse>(url, { params, headers });

  return response.data.data.searchV2.tracksV2.items;
}

async function searchTrack(query: string, limit = 10) {
  const url = "https://open.spotify.com/search/" + encodeURIComponent(query);
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);
  const scriptElement = $("script[data-testid = 'session']");
  const session = (scriptElement.contents()[0] as any).data;
  const accessToken = JSON.parse(session).accessToken;

  return fetchTrackData(query, accessToken, limit);
}

export default searchTrack;
