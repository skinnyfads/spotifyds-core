import spotifyds from "../src/main.js";

const result = await spotifyds.searchTrack("the walters lover");
const track = result.items[0].item.data;
const trackArtists = track.artists.items.map((item) => item.profile.name);
const trackInfo = await spotifyds.getTrackInfo(track.name, trackArtists);

it("should return exact same title between spotify and youtube", () => {
  expect(track.name).toBe(trackInfo.name);
});
it("should return exact same duration between spotify and youtube", () => {
  expect(track.duration.totalMilliseconds / 1000).toBe(trackInfo.duration?.totalSeconds);
});
