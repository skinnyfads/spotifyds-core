import spotifyds from "../src/main.js";

const limit = 15;
const playlistUrl = "https://open.spotify.com/playlist/37i9dQZF1E4kMKSPaJDNFS";
const tracks = await spotifyds.getTracksFromPlaylist(playlistUrl, undefined, limit);

it(`should return ${limit} tracks`, () => {
  expect(tracks.length).toBe(limit);
});
it("should return string track name", () => {
  expect(typeof tracks[0].item.data.name).toBe("string");
});
