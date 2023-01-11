import { existsSync, mkdirSync, createWriteStream } from "node:fs";
import ytdl from "ytdl-core";

async function downloadTrack(name: string, youtubeId: string, dirname = "tracks"): Promise<string> {
  const dir = process.cwd() + "/" + dirname;
  const fileName = name;

  if (!existsSync(dir)) {
    mkdirSync(dir);
  }
  const baseUrl = "https://music.youtube.com/watch?v=";
  const url = baseUrl + youtubeId;
  const filePath = dir + "/" + fileName + ".mp3";
  const file = ytdl(url, { filter: "audio" });
  const stream = file.pipe(createWriteStream(filePath, { flags: "a" }));

  return new Promise((resolve, rejects) => {
    stream.on("finish", () => {
      resolve(filePath);
    });
    stream.on("error", rejects);
  });
}

export default downloadTrack;
