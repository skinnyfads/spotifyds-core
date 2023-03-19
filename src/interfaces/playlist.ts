export interface PlaylistResponse {
  data: Data;
  extensions: Extensions;
}

export interface Data {
  playlistV2: PlaylistV2;
}

export interface PlaylistV2 {
  __typename: string;
  uri: string;
  name: string;
  description: string;
  ownerV2: OwnerV2;
  images: Images;
  collaborative: boolean;
  followers: number;
  format: string;
  attributes: any[];
  sharingInfo: SharingInfo;
  content: Content;
}

export interface Content {
  __typename: string;
  totalCount: number;
  pagingInfo: PagingInfo;
  items: ContentItem[];
}

export interface ContentItem {
  uid: string;
  addedAt: AddedAt;
  addedBy: OwnerV2;
  attributes: any[];
  item: ItemItem;
}

export interface AddedAt {
  isoString: Date;
}

export interface OwnerV2 {
  data: OwnerV2Data;
}

export interface OwnerV2Data {
  __typename: PurpleTypename;
  uri: {
    [key: string]: string;
  };
  username: {
    [key: string]: string;
  };
  name: {
    [key: string]: string;
  };
  avatar: Avatar;
}

export enum PurpleTypename {
  User = "User",
}

export interface Avatar {
  sources: Source[];
}

export interface Source {
  url: string;
  width: number | null;
  height: number | null;
}

export interface ItemItem {
  __typename: ItemTypename;
  data: ItemData;
}

export enum ItemTypename {
  TrackResponseWrapper = "TrackResponseWrapper",
}

export interface ItemData {
  __typename: FluffyTypename;
  uri: string;
  name: string;
  trackDuration: TrackDuration;
  playcount: string;
  albumOfTrack: AlbumOfTrack;
  artists: Artists;
  discNumber: number;
  trackNumber: number;
  playability: Playability;
  contentRating: ContentRating;
}

export enum FluffyTypename {
  Track = "Track",
}

export interface AlbumOfTrack {
  uri: string;
  name: string;
  artists: Artists;
  coverArt: Avatar;
}

export interface Artists {
  items: ArtistsItem[];
}

export interface ArtistsItem {
  uri: string;
  profile: Profile;
}

export interface Profile {
  name: string;
}

export interface ContentRating {
  label: Label;
}

export enum Label {
  Explicit = "EXPLICIT",
  None = "NONE",
}

export interface Playability {
  playable: boolean;
  reason: Reason;
}

export enum Reason {
  Playable = "PLAYABLE",
}

export interface TrackDuration {
  totalMilliseconds: number;
}

export interface PagingInfo {
  offset: number;
  limit: number;
}

export interface Images {
  items: ImagesItem[];
}

export interface ImagesItem {
  extractedColors: ExtractedColors;
  sources: Source[];
}

export interface ExtractedColors {
  colorRaw: ColorRaw;
}

export interface ColorRaw {
  hex: string;
  isFallback: boolean;
}

export interface SharingInfo {
  shareUrl: string;
}

export interface Extensions {
  cacheControl: CacheControl;
}

export interface CacheControl {
  version: number;
  hints: any[];
}
