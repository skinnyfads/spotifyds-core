import { existsSync } from "node:fs";
import { basename as getFileName } from "node:path";
import jest from "jest-mock"; // https://stackoverflow.com/a/48977663
import spotifyds from "../src/main.js";

const result = await spotifyds.searchTrack("vansire nice to see you");
const track = result.items[0].item.data;
const progressCallback = jest.fn();
const filePath = await spotifyds.downloadTrack(track, progressCallback);
const fileName = getFileName(filePath);

it("should call the progressCallback function with the correct arguments", () => {
  expect(progressCallback).toBeCalledWith(expect.any(Number), expect.any(Number), expect.any(Number));
});
it("should return the correct filePath", () => {
  expect(existsSync(filePath)).toBe(true);
});
it("should return the correct fileName", () => {
  expect(fileName).toBe("Nice to See You.mp3");
});
