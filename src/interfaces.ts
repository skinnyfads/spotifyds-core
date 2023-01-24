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
