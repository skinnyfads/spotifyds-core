import ytMusic from "node-youtube-music";

interface ITrackInfo {
  name: string;
  artist: string[];
  thumbnailUrl?: string;
  duration?: {
    label: string;
    totalSeconds: number;
  };
  youtubeId?: string;
}

async function getTrackInfo(name: string, artist: string[]) {
  const query = name + artist.join(" ");
  const searchResult = await ytMusic.searchMusics(query);
  const { thumbnailUrl, duration, youtubeId } = searchResult[0];
  const result: ITrackInfo = { name, artist, thumbnailUrl, duration, youtubeId };

  return result;
}

export default getTrackInfo;
