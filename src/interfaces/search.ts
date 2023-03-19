export interface SearchResponse {
  data: Data;
  extensions: Extensions;
}

export interface Data {
  searchV2: SearchV2;
}

export interface SearchV2 {
  albums: Albums;
  artists: SearchV2Artists;
  episodes: Episodes;
  genres: Albums;
  playlists: Playlists;
  podcasts: Podcasts;
  audiobooks: Albums;
  tracksV2: TracksV2;
  users: Albums;
  topResults: TopResults;
  chipOrder: ChipOrder;
}

export interface Albums {
  totalCount: number;
  items: AlbumsItem[];
}

export interface AlbumsItem {
  data: PurpleData;
}

export interface PurpleData {
  __typename: PurpleTypename;
  uri: string;
  name: string;
  artists: TopicsClass;
  coverArt: CoverArtElement;
  date: DateClass;
}

export enum PurpleTypename {
  Album = "Album",
}

export interface TopicsClass {
  items: PurpleItem[];
}

export interface PurpleItem {
  uri: string;
  profile: Publisher;
}

export interface Publisher {
  name: string;
}

export interface CoverArtElement {
  sources: Source[];
  extractedColors: ExtractedColors;
}

export interface ExtractedColors {
  colorDark: ColorDark;
}

export interface ColorDark {
  hex: string;
  isFallback: boolean;
}

export interface Source {
  url: string;
  width: number | null;
  height: number | null;
}

export interface DateClass {
  year: number;
}

export interface SearchV2Artists {
  totalCount: number;
  items: FluffyItem[];
}

export interface FluffyItem {
  data: FluffyData;
}

export interface FluffyData {
  __typename: FluffyTypename;
  uri: string;
  profile: Profile;
  visuals: Visuals;
}

export enum FluffyTypename {
  Artist = "Artist",
}

export interface Profile {
  name: string;
  verified: boolean;
}

export interface Visuals {
  avatarImage: CoverArtElement;
}

export interface ChipOrder {
  items: ChipOrderItem[];
}

export interface ChipOrderItem {
  typeName: string;
}

export interface Episodes {
  totalCount: number;
  items: EpisodesItem[];
}

export interface EpisodesItem {
  data: TentacledData;
}

export interface TentacledData {
  __typename: TentacledTypename;
  uri: string;
  name: string;
  coverArt: CoverArtElement;
  duration: Duration;
  releaseDate: ReleaseDate;
  playedState: PlayedState;
  podcastV2: PodcastV2;
  description: string;
  contentRating: ContentRating;
}

export enum TentacledTypename {
  Episode = "Episode",
}

export interface ContentRating {
  label: Label;
}

export enum Label {
  None = "NONE",
}

export interface Duration {
  totalMilliseconds: number;
}

export interface PlayedState {
  playPositionMilliseconds: number;
  state: State;
}

export enum State {
  NotStarted = "NOT_STARTED",
}

export interface PodcastV2 {
  data: PodcastV2Data;
}

export interface PodcastV2Data {
  __typename: StickyTypename;
  uri: string;
  name: string;
  coverArt: AvatarClass;
  mediaType: MediaType;
  publisher: Publisher;
}

export enum StickyTypename {
  Podcast = "Podcast",
}

export interface AvatarClass {
  sources: Source[];
}

export enum MediaType {
  Audio = "AUDIO",
  Mixed = "MIXED",
}

export interface ReleaseDate {
  isoString: Date;
  precision: Precision;
}

export enum Precision {
  Minute = "MINUTE",
}

export interface Playlists {
  totalCount: number;
  items: FeaturedElement[];
}

export interface FeaturedElement {
  data: FeaturedData;
}

export interface FeaturedData {
  __typename: IndigoTypename;
  uri: string;
  name: string;
  description: string;
  images: Images;
  ownerV2: OwnerV2;
}

export enum IndigoTypename {
  Playlist = "Playlist",
}

export interface Images {
  items: CoverArtElement[];
}

export interface OwnerV2 {
  data: OwnerV2Data;
}

export interface OwnerV2Data {
  __typename: IndecentTypename;
  name: Name;
  uri: {
    [key: string]: string;
    SpotifyUserSpotify: "spotify:user:spotify";
  };
  username: {
    [key: string]: string;
    Spotify: "spotify";
  };
  avatar: AvatarClass;
}

export enum IndecentTypename {
  User = "User",
}

export enum Name {
  Jgd = "Jgd",
  Spotify = "Spotify",
}

export interface Podcasts {
  totalCount: number;
  items: PodcastsItem[];
}

export interface PodcastsItem {
  data: StickyData;
}

export interface StickyData {
  __typename: StickyTypename;
  uri: string;
  name: string;
  coverArt: CoverArtElement;
  publisher: Publisher;
  mediaType: MediaType;
  topics: Topics;
}

export interface Topics {
  items: TentacledItem[];
}

export interface TentacledItem {
  __typename: ItemTypename;
  title: string;
  uri: string;
}

export enum ItemTypename {
  PodcastTopic = "PodcastTopic",
}

export interface TopResults {
  itemsV2: ItemsV2[];
  featured: FeaturedElement[];
}

export interface ItemsV2 {
  matchedFields: string[];
  item: ItemsV2Item;
}

export interface ItemsV2Item {
  data: IndigoData;
}

export interface IndigoData {
  __typename: string;
  uri: string;
  profile?: Profile;
  visuals?: Visuals;
  id?: string;
  name?: string;
  albumOfTrack?: AlbumOfTrack;
  artists?: TopicsClass;
  contentRating?: ContentRating;
  duration?: Duration;
  playability?: Playability;
  description?: string;
  images?: Images;
  ownerV2?: OwnerV2;
  coverArt?: CoverArtElement;
  date?: DateClass;
  publisher?: Publisher;
  mediaType?: MediaType;
  topics?: TopicsClass;
}

export interface AlbumOfTrack {
  uri: string;
  name: string;
  coverArt: CoverArtElement;
  id: string;
}

export interface Playability {
  playable: boolean;
}

export interface TracksV2 {
  totalCount: number;
  items: TracksV2Item[];
}

export interface TracksV2Item {
  matchedFields: string[];
  item: ItemItem;
}

export interface ItemItem {
  data: IndecentData;
}

export interface IndecentData {
  __typename: HilariousTypename;
  uri: string;
  id: string;
  name: string;
  albumOfTrack: AlbumOfTrack;
  artists: TopicsClass;
  contentRating: ContentRating;
  duration: Duration;
  playability: Playability;
}

export enum HilariousTypename {
  Track = "Track",
}

export interface Extensions {
  requestIds: RequestIDS;
  cacheControl: CacheControl;
}

export interface CacheControl {
  version: number;
  hints: any[];
}

export interface RequestIDS {
  "/searchV2": SearchV2Class;
  "/searchV2/topResults": SearchV2Class;
}

export interface SearchV2Class {
  "search-api": string;
}
