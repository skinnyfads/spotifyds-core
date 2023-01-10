import getTracksFromPlaylist from "./getTracksFromPlaylist.js";

(async () => {
  console.log("Fetching tracks...");
  const url = "https://open.spotify.com/playlist/12PkoUu4gMTFeTml6nf3ru";
  const tracks = await getTracksFromPlaylist(url);

  console.log(tracks);
})();
