import axios from "axios";
import getAccessToken from "./getAccessToken.js";
import { PlaylistResponse } from "./interfaces/playlist.js";

async function getTracksFromPlaylist(url: string, offset = 0, limit = 25) {
  const accessToken = await getAccessToken(url);
  const playlistId = new URL(url).pathname.split("/")[2];
  const apiUrl = "https://api-partner.spotify.com/pathfinder/v1/query";
  const params = {
    operationName: "fetchPlaylist",
    variables: `{"uri":"spotify:playlist:${playlistId}","offset":${offset},"limit":${limit}}`,
    extensions: `{"persistedQuery":{"version":1,"sha256Hash":"e578eda4f77aae54294a48eac85e2a42ddb203faf6ea12b3fddaec5aa32918a3"}}`,
  };
  const headers = { authorization: "Bearer " + accessToken };
  const response = await axios.get<PlaylistResponse>(apiUrl, { params, headers });

  return response.data.data.playlistV2.content.items;
}

export default getTracksFromPlaylist;
