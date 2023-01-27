import EventEmitter from "node:events";

export interface IDownload extends EventEmitter {
  on(event: "error", listener: (error: unknown) => void): this;
  on(event: "progress", listener: (chunkLength: number, downloaded: number, total: number) => void): this;
  on(event: "finish", listener: (filePath: string) => void): this;
  on(event: string, listener: Function): this;
}

export interface ISearchTrackResponse {
  data: {
    searchV2: {
      tracksV2: {
        totalCount: number;
        items: {
          matchedFields: never[];
          item: {
            data: {
              __typename: string;
              uri: string;
              id: string;
              name: string;
              albumOfTrack: {
                uri: string;
                name: string;
                coverArt: {
                  sources: {
                    url: string;
                    width: number;
                    height: number;
                  }[];
                };
                id: string;
              };
              artists: {
                items: {
                  uri: string;
                  profile: {
                    name: string;
                  };
                }[];
              };
            };
          };
        }[];
      };
    };
  };
}
