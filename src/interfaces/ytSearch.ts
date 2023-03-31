export interface YtSearchResponse {
  contents: Contents;
}

export interface Contents {
  tabbedSearchResultsRenderer: TabbedSearchResultsRenderer;
}

export interface TabbedSearchResultsRenderer {
  tabs: Tab[];
}

export interface Tab {
  tabRenderer: TabRenderer;
}

export interface TabRenderer {
  title: string;
  selected: boolean;
  content: TabRendererContent;
}

export interface TabRendererContent {
  sectionListRenderer: SectionListRenderer;
}

export interface SectionListRenderer {
  contents: ContentElement[];
}

export interface ContentElement {
  musicCardShelfRenderer: MusicCardShelfRenderer;
}

export interface MusicCardShelfRenderer {
  thumbnail: MusicCardShelfRendererThumbnail;
  title: Title;
  subtitle: Subtitle;
}

export interface Subtitle {
  runs: SubtitleRun[];
}

export interface SubtitleRun {
  text: string;
  navigationEndpoint?: PurpleNavigationEndpoint;
}

export interface PurpleNavigationEndpoint {
  clickTrackingParams: string;
  browseEndpoint: BrowseEndpoint;
}

export interface BrowseEndpoint {
  browseId: string;
  browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs;
}

export interface BrowseEndpointContextSupportedConfigs {
  browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig;
}

export interface BrowseEndpointContextMusicConfig {
  pageType: string;
}

export interface MusicCardShelfRendererThumbnail {
  musicThumbnailRenderer: MusicThumbnailRenderer;
}

export interface MusicThumbnailRenderer {
  thumbnail: MusicThumbnailRendererThumbnail;
  thumbnailCrop: string;
  thumbnailScale: string;
  trackingParams: string;
}

export interface MusicThumbnailRendererThumbnail {
  thumbnails: ThumbnailElement[];
}

export interface ThumbnailElement {
  url: string;
  width: number;
  height: number;
}

export interface Title {
  runs: TitleRun[];
}

export interface TitleRun {
  text: string;
  navigationEndpoint: FluffyNavigationEndpoint;
}

export interface FluffyNavigationEndpoint {
  clickTrackingParams: string;
  watchEndpoint: WatchEndpoint;
}

export interface WatchEndpoint {
  videoId: string;
  watchEndpointMusicSupportedConfigs: WatchEndpointMusicSupportedConfigs;
}

export interface WatchEndpointMusicSupportedConfigs {
  watchEndpointMusicConfig: WatchEndpointMusicConfig;
}

export interface WatchEndpointMusicConfig {
  musicVideoType: string;
}
