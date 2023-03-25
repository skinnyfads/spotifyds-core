# Spotifyds

At this time you only be able to download tracks from Spotify Playlist

## Usage

### searchTrack

```ts
import spotifyds from "spotifyds-core";

(async () => {
  const result = await spotifyds.searchTrack("she is gonna leave you", 5);
  const tracks = result.items.map((item) => item.item.data);

  console.log(tracks);
})();
```

### getTracksFromPlaylist

```ts
import spotifyds from "spotifyds-core";

const url = "https://open.spotify.com/playlist/0QIIDENHBcpLrJjZ18HZ3v";

async function* getPlaylistTracks(url, { limit }) {
  const playlist = await spotifyds.getPlaylist(url);
  const totalTracks = playlist.content.totalCount;

  for (let offset = 0; offset < totalTracks; offset += limit) {
    yield spotifyds.getTracksFromPlaylist(url, offset, limit);
  }
}
for await (const tracks of getPlaylistTracks(url, { limit: 10 })) {
  console.log(tracks.map((track) => track.item.data.name));
}
```

### downloadTrack

```ts
import spotifyds from "spotifyds-core";

(async () => {
  const results = await spotifyds.searchTrack("she is gonna leave you");
  const track = result.items[0].item.data;
  const filePath = await spotifyds.downloadTrack(track);

  console.log(filePath);
})();
```

Download Track With Progress

```ts
import readline from "node:readline";
import spotifyds from "spotifyds-core";

const startTime = Date.now();

function progressCallback(chunkLength, downloaded, total) {
  const percent = downloaded / total;
  const downloadedMinutes = (Date.now() - startTime) / 1000 / 60;
  const estimatedDownloadTime = downloadedMinutes / percent - downloadedMinutes;

  readline.cursorTo(process.stdout, 0);

  process.stdout.write(`${(percent * 100).toFixed(2)}% downloaded `);
  process.stdout.write(`(${(downloaded / 1024 / 1024).toFixed(2)}MB of ${(total / 1024 / 1024).toFixed(2)}MB)\n`);
  process.stdout.write(`running for: ${downloadedMinutes.toFixed(2)} minutes`);
  process.stdout.write(`, estimated time left: ${estimatedDownloadTime.toFixed(2)} minutes `);

  readline.moveCursor(process.stdout, 0, -3);
}
(async () => {
  const results = await spotifyds.searchTrack("she is gonna leave you");
  const track = result.items[0].item.data;
  const filePath = await spotifyds.downloadTrack(track, progressCallback);

  process.stdout.write("\n\n\n\n\n");
  console.log(filePath);
})();
```
