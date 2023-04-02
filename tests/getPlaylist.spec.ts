import spotifyds from "../src/main.js";

const url = "https://open.spotify.com/playlist/37i9dQZF1E4kMKSPaJDNFS";
const playlist = await spotifyds.getPlaylist(url);

it("should return the correct playlist name", () => {
  expect(playlist.name).toBe("Mason Murphy Radio");
});
it("should return zero track", () => {
  expect(playlist.content.items.length).toBe(0);
});
it("should match playlist id", () => {
  const urlPlaylistId = new URL(url).pathname.split("/")[2];
  const playlistId = playlist.uri.split(":")[2];
  expect(urlPlaylistId).toBe(playlistId);
});
