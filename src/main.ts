import getTrackInfo from "./getTrackInfo.js";
import getTracksFromPlaylist from "./getTracksFromPlaylist.js";

(async () => {
  console.log("Fetching tracks...");
  const url = "https://open.spotify.com/playlist/12PkoUu4gMTFeTml6nf3ru";
  const tracks = await getTracksFromPlaylist(url);

  console.log(tracks);
  console.log("Get track info..");

  tracks.forEach(async (track) => {
    const trackInfo = await getTrackInfo(track.name, track.artist);
    console.log(trackInfo);
  });
})();
