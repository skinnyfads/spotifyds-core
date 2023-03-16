# Spotifyds

At this time you only be able to download songs from Spotify Playlist

## Usage

```ts
import spotifyds from "spotifyds-core";

(async () => {
  const url = "https://open.spotify.com/playlist/12PkoUu4gMTFeTml6nf3ru";
  const tracks = await spotifyds.getTracksFromPlaylist(url);

  tracks.forEach(async (track) => {
    const trackInfo = await spotifyds.getTrackInfo(track.name, track.artist);
    const download = spotifyds.downloadTrack(track.name, trackInfo.youtubeId, "musics");

    download.on("progress", (chunkLength, downloaded, total) => {
      console.log({ chunkLength, downloaded, total });
    });
    download.on("finish", (filePath) => {
      console.log(filePath);
    });
  });
})();
```

searchTrack

```ts
import spotifyds from "spotyfids-core";

(async () => {
  const results = await spotifyds.searchTrack("she is gonna leave you", 2);
  const tracks = results.map((result) => result.item.data);
  console.log(tracks);
})();
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

searchTrack

```ts
[
  {
    __typename: "Track",
    uri: "spotify:track:7KZOW7vBKDUPqvqXiPwoeK",
    id: "7KZOW7vBKDUPqvqXiPwoeK",
    name: "She's Gonna Leave You",
    albumOfTrack: {
      uri: "spotify:album:0PecAnEUSEp9vOUKh2h1HG",
      name: "She's Gonna Leave You",
      coverArt: {
        sources: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e02154c7518b8e2aa6b63ef20ba",
            width: 300,
            height: 300,
          },
          {
            url: "https://i.scdn.co/image/ab67616d00004851154c7518b8e2aa6b63ef20ba",
            width: 64,
            height: 64,
          },
          {
            url: "https://i.scdn.co/image/ab67616d0000b273154c7518b8e2aa6b63ef20ba",
            width: 640,
            height: 640,
          },
        ],
        extractedColors: {
          colorDark: {
            hex: "#008676",
            isFallback: false,
          },
        },
      },
      id: "0PecAnEUSEp9vOUKh2h1HG",
    },
    artists: {
      items: [
        {
          uri: "spotify:artist:027TpXKGwdXP7iwbjUSpV8",
          profile: {
            name: "The Walters",
          },
        },
      ],
    },
    contentRating: {
      label: "NONE",
    },
    duration: {
      totalMilliseconds: 220000,
    },
    playability: {
      playable: true,
    },
  },
  {
    __typename: "Track",
    uri: "spotify:track:2Ap6ZjicxxcWvit5ZRYQxk",
    id: "2Ap6ZjicxxcWvit5ZRYQxk",
    name: "She's Gone",
    albumOfTrack: {
      uri: "spotify:album:5w6EjgZMLmZm7Z0EJJZ7PZ",
      name: "Steelheart",
      coverArt: {
        sources: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e0281c835e514e951482d7190fe",
            width: 300,
            height: 300,
          },
          {
            url: "https://i.scdn.co/image/ab67616d0000485181c835e514e951482d7190fe",
            width: 64,
            height: 64,
          },
          {
            url: "https://i.scdn.co/image/ab67616d0000b27381c835e514e951482d7190fe",
            width: 640,
            height: 640,
          },
        ],
        extractedColors: {
          colorDark: {
            hex: "#A26868",
            isFallback: false,
          },
        },
      },
      id: "5w6EjgZMLmZm7Z0EJJZ7PZ",
    },
    artists: {
      items: [
        {
          uri: "spotify:artist:0ecbvwhuhiEAWOLHlRXpqD",
          profile: {
            name: "STEELHEART",
          },
        },
      ],
    },
    contentRating: {
      label: "NONE",
    },
    duration: {
      totalMilliseconds: 392400,
    },
    playability: {
      playable: true,
    },
  },
];
```
