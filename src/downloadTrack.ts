import EventEmitter from "node:events";
import { existsSync, mkdirSync, createWriteStream } from "node:fs";
import ytdl from "ytdl-core";
import { IDownload } from "./interfaces.js";

function downloadTrack(name: string, youtubeId: string, dirname = "tracks"): IDownload {
  const dir = process.cwd() + "/" + dirname;
  const fileName = name;
  const download: IDownload = new EventEmitter();

  if (!existsSync(dir)) {
    mkdirSync(dir);
  }
  const baseUrl = "https://music.youtube.com/watch?v=";
  const url = baseUrl + youtubeId;
  const filePath = dir + "/" + fileName + ".mp3";
  const file = ytdl(url, { filter: "audio" });
  const stream = file.pipe(createWriteStream(filePath, { flags: "a" }));

  stream.on("finish", () => download.emit("finish", filePath));
  stream.on("error", (error) => download.emit("error", error));
  file.on("progress", function () {
    download.emit("progress", ...arguments);
  });
  return download;
}

export default downloadTrack;
