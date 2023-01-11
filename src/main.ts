import downloadTrack from "./downloadTrack.js";
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

    if (!trackInfo.youtubeId) {
      console.log("Track not found");
      return;
    }
    console.log("Trying to download" + trackInfo.name);
    const path = await downloadTrack(trackInfo.name, trackInfo.youtubeId, "tracks");
    console.log(path);
  });
})();
