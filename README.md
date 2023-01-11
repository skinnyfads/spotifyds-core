# Spotifyds

At this time you only be able to download songs from Spotify Playlist

## Usage

Short Version

```ts
import spotifyds from "spotifyds-core";

(async () => {
  const url = "https://open.spotify.com/playlist/12PkoUu4gMTFeTml6nf3ru";
  const tracks = await spotifyds.getTracksFromPlaylist(url);

  tracks.forEach(async (track) => {
    const trackInfo = await spotifyds.getTrackInfo(track.name, track.artist);
    console.log(trackInfo);

    const path = await spotifyds.downloadTrack(track.name, trackInfo.youtubeId, "musics");
    console.log(path);
  });
})();
```

Long Version

```ts
import spotifyds from "spotyfids-core";

const { getTracksFromPlaylist, getTrackInfo, downloadTrack } = spotityds;

const url = "https://open.spotify.com/playlist/12PkoUu4gMTFeTml6nf3ru";

console.log("Fetching tracks..");

const tracks = await getTracksFromPlaylist(url);
console.log(tracks);

tracks.forEach(async (track) => {
  console.log(`Get ${track.name} detail info..`);

  const trackInfo = await getTrackInfo(track.name, track.artist);
  console.log(trackInfo);

  if (!trackInfo.youtubeId) {
    console.log(track.name + " not found");
    return;
  }
  console.log(`Downloading ${track.name}..`);

  const path = await downloadTrack(track.name, trackInfo.youtubeId);
  console.log(path);
});
```

## Example Response

getTracksFromPlaylist

```ts
[
  {
    name: "Green Tea & Honey",
    artist: ["Dane Amar", "Jereena Montemayor"],
  },
  {
    name: "Little Bit More",
    artist: ["Suriel Hess"],
  },
  {
    name: "Feels Like You",
    artist: ["Faime"],
  },
];
```

getTrackInfo

```ts
[
  {
    name: "Feels Like You",
    artist: ["Faime"],
    thumbnailUrl:
      "https://lh3.googleusercontent.com/ZX_qj8Ttn7KmIGB8JzlRtuOkAlYSx8-Y0X9np0kt8LxjmUHpYljpeI9Vw8a7x3RctRdPzGmLN9Hu99sRgw=w120-h120-l90-rj",
    duration: { label: "3:08", totalSeconds: 188 },
    youtubeId: "ZRv3tJEKAO4",
  },
  {
    name: "Green Tea & Honey",
    artist: ["Dane Amar", "Jereena Montemayor"],
    thumbnailUrl:
      "https://lh3.googleusercontent.com/-F4HQNh8JpwVngtfc9YlSZEjrkDQUEvQQ8sg5uqau_QXtFKLih1Fvrw-11UkCs5aDq0f0rI8wQ9OKM0=w120-h120-l90-rj",
    duration: { label: "3:43", totalSeconds: 223 },
    youtubeId: "Mcp1UhXsyU4",
  },
  {
    name: "Little Bit More",
    artist: ["Suriel Hess"],
    thumbnailUrl:
      "https://lh3.googleusercontent.com/zvxCAJweZ3LetWjuJytKoZoqL6UqiDxJOjDJuQVLGcFx7aYnyIJllu6B9yD3IS6fjVIP900201UzdKMT=w120-h120-l90-rj",
    duration: { label: "3:01", totalSeconds: 181 },
    youtubeId: "8KdG_zp3ieo",
  },
];
```

downloadTrack

```txt
spotifyds-core/tracks/Feels Like You.mp3

spotifyds-core/tracks/Little Bit More.mp3

spotifyds-core/tracks/Green Tea & Honey.mp3
```
