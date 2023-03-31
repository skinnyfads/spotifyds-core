import ytSearchMusic from "./ytSearchMusic";

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
  const query = name + " - " + artist.join(", ");
  const { thumbnailUrl, duration, youtubeId } = await ytSearchMusic(query);
  const result: ITrackInfo = { name, artist, thumbnailUrl, duration, youtubeId };

  return result;
}

export default getTrackInfo;
