import axios from "axios";
import { MusicCardShelfRenderer, YtSearchResponse } from "./interfaces/ytSearch";

function parseDuration(duration: string) {
  const time = duration.split(":").map(Number);
  const minutes = time[0];
  const seconds = time[1];

  return minutes * 60 + seconds;
}
function parseMusicInfo(matched: MusicCardShelfRenderer) {
  const title = matched.title.runs[0].text;
  const thumbnailUrl = matched.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails[0].url;
  const youtubeId = matched.title.runs[0].navigationEndpoint.watchEndpoint.videoId;
  const artist = matched.subtitle.runs[2].text;
  const durationLabel = matched.subtitle.runs[6].text;
  const durationTotalSeconds = parseDuration(durationLabel);
  const duration = {label: durationLabel, totalSeconds: durationTotalSeconds}

  return { title, thumbnailUrl, youtubeId, artist, duration };
}
async function ytSearchMusic(query: string) {
  const baseUrl = "https://music.youtube.com/youtubei/v1/search";
  const requestData = {
    query,
    context: {
      client: {
        clientName: "WEB_REMIX",
        clientVersion: "0.1",
      },
    },
  };
  const headers = {
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
    "x-origin": "https://music.youtube.com",
  };
  const params = {
    params: { key: "AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30" },
  };
  const response = await axios.post<YtSearchResponse>(baseUrl, requestData, { headers, params });
  const searchResult =
    response.data.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents!;
  const musicCardShelfRenderer: MusicCardShelfRenderer = searchResult.find((result) => result.musicCardShelfRenderer)!
    .musicCardShelfRenderer!;
  const musicInfo = parseMusicInfo(musicCardShelfRenderer);

  return musicInfo;
}

export default ytSearchMusic;
