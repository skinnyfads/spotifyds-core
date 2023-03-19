import { existsSync, mkdirSync, createWriteStream } from "node:fs";
import ytdl from "ytdl-core";
import getTrackInfo from "./getTrackInfo.js";
import { Track } from "./interfaces/index.js";

type ProgressCallback = (chunkLength: number, downloaded: number, total: number) => void;

async function downloadTrack(track: Track, progressCallback?: ProgressCallback): Promise<string> {
  return new Promise(async (resolve) => {
    const dir = process.cwd() + "/" + "tracks";
    const fileName = track.name;

    if (!existsSync(dir)) {
      mkdirSync(dir);
    }
    const trackName = track.name;
    const trackArtist = track.artists.items.map((item) => item.profile.name);
    const trackInfo = await getTrackInfo(trackName, trackArtist);
    const baseUrl = "https://music.youtube.com/watch?v=";
    const url = baseUrl + trackInfo.youtubeId;
    const filePath = dir + "/" + fileName + ".mp3";
    const file = ytdl(url, { filter: "audio" });
    const stream = file.pipe(createWriteStream(filePath, { flags: "a" }));

    if (progressCallback) {
      file.on("progress", progressCallback);
    }
    stream.on("finish", () => resolve(filePath));
  });
}

export default downloadTrack;
