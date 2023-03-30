import spotifyds from "../src/main";

const searchLimit = 3;
const result = await spotifyds.searchTrack("chris james the reminder", searchLimit);

it("should return exact track name", () => {
  const track = result.items[0].item.data;
  expect(track.name).toBe("The Reminder");
});
it("should return exact with the provided limit", () => {
  expect(result.items.length).toBe(searchLimit);
});
