import axios from "axios";
import cheerio from "cheerio";

interface IParseTrack {
  name: string;
  artist: string[];
}

async function getTracksFromPlaylist(url: string) {
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);
  const trackRow = $("div[data-testid = 'track-row']");
  const tracks: IParseTrack[] = [];

  trackRow.each((index, element) => {
    const $track = cheerio.load(element);

    $track("a").each(function () {
      const href = $(this).attr("href") || "";
      tracks[index] = tracks[index] || { name: "", artist: [] };

      if (href.includes("track/")) {
        const trackName = $(this).text();
        tracks[index].name = trackName;
      } else if (href.includes("artist/")) {
        const artistName = $(this).text();
        tracks[index].artist.push(artistName);
      }
    });
  });

  return tracks;
}

export default getTracksFromPlaylist;
