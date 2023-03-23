import axios from "axios";
import getAccessToken from "./getAccessToken.js";
import { SearchResponse } from "./interfaces/search.js";

async function searchTrack(query: string, limit = 10) {
  const url = "https://open.spotify.com/search/" + encodeURIComponent(query);
  const accessToken = await getAccessToken(url);
  query = query.replace(/\s/g, "+");
  const apiUrl = "https://api-partner.spotify.com/pathfinder/v1/query";
  const params = {
    operationName: "searchDesktop",
    variables: `{"searchTerm":"${query}","offset":0,"limit":${limit},"numberOfTopResults":5,"includeAudiobooks":true}`,
    extensions:
      '{"persistedQuery":{"version":1,"sha256Hash":"1d3a8f81abf4f33f49d1e389ed0956761af669eedb62a050c6c7bce5c66070bb"}}',
  };
  const headers = { authorization: "Bearer " + accessToken };
  const response = await axios.get<SearchResponse>(apiUrl, { params, headers });

  return response.data.data.searchV2.tracksV2;
}

export default searchTrack;
