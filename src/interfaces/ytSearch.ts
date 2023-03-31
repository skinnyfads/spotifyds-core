export interface YtSearchResponse {
  responseContext: ResponseContext;
  contents: Contents;
  trackingParams: string;
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
  selected?: boolean;
  content: TabRendererContent;
  tabIdentifier: string;
  trackingParams: string;
  endpoint?: Endpoint;
}

export interface TabRendererContent {
  sectionListRenderer: SectionListRenderer;
}

export interface SectionListRenderer {
  contents?: SectionListRendererContent[];
  trackingParams: string;
  header?: SectionListRendererHeader;
  continuations?: Continuation[];
}

export interface SectionListRendererContent {
  musicCardShelfRenderer?: MusicCardShelfRenderer;
  musicShelfRenderer?: MusicShelfRenderer;
}

export interface MusicCardShelfRenderer {
  trackingParams: string;
  thumbnail: MusicCardShelfRendererThumbnail;
  title: Title;
  subtitle: Subtitle;
  buttons: Button[];
  menu: MusicCardShelfRendererMenu;
  onTap: OnTap;
  header: MusicCardShelfRendererHeader;
  thumbnailOverlay: ThumbnailOverlay;
}

export interface Button {
  buttonRenderer: ButtonRenderer;
}

export interface ButtonRenderer {
  style: string;
  size?: string;
  isDisabled?: boolean;
  text: BottomText;
  icon: Icon;
  accessibility: AccessibilityAccessibility;
  trackingParams: string;
  accessibilityData: AccessibilityPauseDataClass;
  command: ButtonRendererCommand;
}

export interface AccessibilityAccessibility {
  label: string;
}

export interface AccessibilityPauseDataClass {
  accessibilityData: AccessibilityAccessibility;
}

export interface ButtonRendererCommand {
  clickTrackingParams: string;
  watchEndpoint?: CommandWatchEndpoint;
  addToPlaylistEndpoint?: PlaylistItemData;
}

export interface PlaylistItemData {
  videoId: VideoID;
}

export type VideoID =
  | "PnBzh9-tqP0"
  | "krrkhe18SqY"
  | "Ui0voeQ0bIs"
  | "iKLe8oDxNNQ"
  | "Sw95cSPC4RQ"
  | "q6Rnd_jWJ8g"
  | "MdrrfKU5PY0";

export interface CommandWatchEndpoint {
  videoId: VideoID;
  params: Params;
  watchEndpointMusicSupportedConfigs: WatchEndpointMusicSupportedConfigs;
}

export type Params = "wAEB8gECKAE%3D" | "wAEB" | "wAEB8gECGAE%3D";

export interface WatchEndpointMusicSupportedConfigs {
  watchEndpointMusicConfig: WatchEndpointMusicConfig;
}

export interface WatchEndpointMusicConfig {
  musicVideoType: MusicVideoType;
}

export type MusicVideoType = "MUSIC_VIDEO_TYPE_OMV" | "MUSIC_VIDEO_TYPE_ATV" | "MUSIC_VIDEO_TYPE_UGC";

export interface Icon {
  iconType: string;
}

export interface BottomText {
  runs: BottomTextRun[];
}

export interface BottomTextRun {
  text: string;
}

export interface MusicCardShelfRendererHeader {
  musicCardShelfHeaderBasicRenderer: MusicCardShelfHeaderBasicRenderer;
}

export interface MusicCardShelfHeaderBasicRenderer {
  title: BottomText;
  trackingParams: string;
}

export interface MusicCardShelfRendererMenu {
  menuRenderer: PurpleMenuRenderer;
}

export interface PurpleMenuRenderer {
  items: PurpleItem[];
  trackingParams: string;
  accessibility: AccessibilityPauseDataClass;
}

export interface PurpleItem {
  menuNavigationItemRenderer?: MenuItemRenderer;
  menuServiceItemRenderer?: MenuItemRenderer;
  toggleMenuServiceItemRenderer?: PurpleToggleMenuServiceItemRenderer;
}

export interface MenuItemRenderer {
  text: BottomText;
  icon: Icon;
  navigationEndpoint?: MenuNavigationItemRendererNavigationEndpoint;
  trackingParams: string;
  serviceEndpoint?: ServiceEndpoint;
}

export interface MenuNavigationItemRendererNavigationEndpoint {
  clickTrackingParams: string;
  watchEndpoint?: PurpleWatchEndpoint;
  addToPlaylistEndpoint?: AddToPlaylistEndpoint;
  browseEndpoint?: BrowseEndpoint;
  shareEntityEndpoint?: ShareEntityEndpoint;
  watchPlaylistEndpoint?: WatchPlaylistEndpoint;
}

export interface AddToPlaylistEndpoint {
  videoId?: VideoID;
  playlistId?: PlaylistID;
}

export type PlaylistID =
  | "OLAK5uy_nyoFVirJIj4W2XDg6hBxuJnf8R5aVuXiM"
  | "OLAK5uy_mtAP5zB7yCkG6s_MRL7sFQZ0pp-yEgtNE"
  | "OLAK5uy_kPWYl0H3IW6rF-EnWXS27zd52F0DV9JCo"
  | "PLGL92FUH_c6oYHMjguk7mqblwGE4EF_kZ"
  | "PLco5YwHQXm8e5b5SCQJZYvqhZMub3NC35"
  | "PLuLa5HopODhW2qAvLmnCS-TaKOXFDCwTG";

export interface BrowseEndpoint {
  browseId: string;
  browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs;
}

export interface BrowseEndpointContextSupportedConfigs {
  browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig;
}

export interface BrowseEndpointContextMusicConfig {
  pageType: PageType;
}

export type PageType =
  | "MUSIC_PAGE_TYPE_ARTIST"
  | "MUSIC_PAGE_TYPE_ALBUM"
  | "MUSIC_PAGE_TYPE_USER_CHANNEL"
  | "MUSIC_PAGE_TYPE_PLAYLIST";

export interface ShareEntityEndpoint {
  serializedShareEntity: string;
  sharePanelType: SharePanelType;
}

export type SharePanelType = "SHARE_PANEL_TYPE_UNIFIED_SHARE_PANEL";

export interface PurpleWatchEndpoint {
  videoId: VideoID;
  playlistId: string;
  params: Params;
  loggingContext: LoggingContext;
  watchEndpointMusicSupportedConfigs: WatchEndpointMusicSupportedConfigs;
}

export interface LoggingContext {
  vssLoggingContext: VssLoggingContext;
}

export interface VssLoggingContext {
  serializedContextData: string;
}

export interface WatchPlaylistEndpoint {
  playlistId: string;
  params?: Params;
}

export interface ServiceEndpoint {
  clickTrackingParams: string;
  queueAddEndpoint: QueueAddEndpoint;
}

export interface QueueAddEndpoint {
  queueTarget: AddToPlaylistEndpoint;
  queueInsertPosition: QueueInsertPosition;
  commands: CommandElement[];
}

export interface CommandElement {
  clickTrackingParams: string;
  addToToastAction: AddToToastAction;
}

export interface AddToToastAction {
  item: AddToToastActionItem;
}

export interface AddToToastActionItem {
  notificationTextRenderer: NotificationTextRenderer;
}

export interface NotificationTextRenderer {
  successResponseText: BottomText;
  trackingParams: string;
}

export type QueueInsertPosition = "INSERT_AFTER_CURRENT_VIDEO" | "INSERT_AT_END";

export interface PurpleToggleMenuServiceItemRenderer {
  defaultText: BottomText;
  defaultIcon: Icon;
  defaultServiceEndpoint: DefaultServiceEndpointClass;
  toggledText: BottomText;
  toggledIcon: Icon;
  toggledServiceEndpoint: DefaultServiceEndpointClass;
  trackingParams: string;
}

export interface DefaultServiceEndpointClass {
  clickTrackingParams: string;
  likeEndpoint: PurpleLikeEndpoint;
}

export interface PurpleLikeEndpoint {
  status: string;
  target: PlaylistItemData;
}

export interface OnTap {
  clickTrackingParams: string;
  watchEndpoint: OnTapWatchEndpoint;
}

export interface OnTapWatchEndpoint {
  videoId: VideoID;
  watchEndpointMusicSupportedConfigs: WatchEndpointMusicSupportedConfigs;
}

export interface Subtitle {
  runs: SubtitleRun[];
}

export interface SubtitleRun {
  text: string;
  navigationEndpoint?: MusicResponsiveListItemRendererNavigationEndpoint;
}

export interface MusicResponsiveListItemRendererNavigationEndpoint {
  clickTrackingParams: string;
  browseEndpoint: BrowseEndpoint;
}

export interface MusicCardShelfRendererThumbnail {
  musicThumbnailRenderer: MusicThumbnailRenderer;
}

export interface MusicThumbnailRenderer {
  thumbnail: MusicThumbnailRendererThumbnail;
  thumbnailCrop: ThumbnailCrop;
  thumbnailScale: ThumbnailScale;
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

export type ThumbnailCrop = "MUSIC_THUMBNAIL_CROP_UNSPECIFIED" | "MUSIC_THUMBNAIL_CROP_CIRCLE";

export type ThumbnailScale = "MUSIC_THUMBNAIL_SCALE_ASPECT_FIT" | "MUSIC_THUMBNAIL_SCALE_ASPECT_FILL";

export interface ThumbnailOverlay {
  musicItemThumbnailOverlayRenderer: ThumbnailOverlayMusicItemThumbnailOverlayRenderer;
}

export interface ThumbnailOverlayMusicItemThumbnailOverlayRenderer {
  background: Background;
  content: PurpleContent;
  contentPosition: ContentPosition;
  displayStyle: DisplayStyle;
}

export interface Background {
  verticalGradient: VerticalGradient;
}

export interface VerticalGradient {
  gradientLayerColors: string[];
}

export interface PurpleContent {
  musicPlayButtonRenderer: PurpleMusicPlayButtonRenderer;
}

export interface PurpleMusicPlayButtonRenderer {
  playNavigationEndpoint: OnTap;
  trackingParams: string;
  playIcon: Icon;
  pauseIcon: Icon;
  iconColor: number;
  backgroundColor: number;
  activeBackgroundColor: number;
  loadingIndicatorColor: number;
  playingIcon: Icon;
  iconLoadingColor: number;
  activeScaleFactor: number;
  buttonSize: string;
  rippleTarget: RippleTarget;
  accessibilityPlayData: AccessibilityPauseDataClass;
  accessibilityPauseData: AccessibilityPauseDataClass;
}

export type RippleTarget = "MUSIC_PLAY_BUTTON_RIPPLE_TARGET_SELF";

export type ContentPosition = "MUSIC_ITEM_THUMBNAIL_OVERLAY_CONTENT_POSITION_CENTERED";

export type DisplayStyle = "MUSIC_ITEM_THUMBNAIL_OVERLAY_DISPLAY_STYLE_PERSISTENT";

export interface Title {
  runs: PurpleRun[];
}

export interface PurpleRun {
  text: string;
  navigationEndpoint: OnTap;
}

export interface MusicShelfRenderer {
  title: BottomText;
  contents: MusicShelfRendererContent[];
  trackingParams: string;
  bottomText: BottomText;
  bottomEndpoint: Endpoint;
  shelfDivider: ShelfDivider;
}

export interface Endpoint {
  clickTrackingParams: string;
  searchEndpoint: SearchEndpoint;
}

export interface SearchEndpoint {
  query: Query;
  params: string;
}

export type Query = "Langkah Kecil - Neckemic";

export interface MusicShelfRendererContent {
  musicResponsiveListItemRenderer: MusicResponsiveListItemRenderer;
}

export interface MusicResponsiveListItemRenderer {
  trackingParams: string;
  thumbnail: MusicCardShelfRendererThumbnail;
  overlay?: Overlay;
  flexColumns: FlexColumn[];
  menu: MusicResponsiveListItemRendererMenu;
  playlistItemData?: PlaylistItemData;
  flexColumnDisplayStyle: string;
  itemHeight: ItemHeight;
  navigationEndpoint?: MusicResponsiveListItemRendererNavigationEndpoint;
}

export interface FlexColumn {
  musicResponsiveListItemFlexColumnRenderer: MusicResponsiveListItemFlexColumnRenderer;
}

export interface MusicResponsiveListItemFlexColumnRenderer {
  text: Text;
  displayPriority: DisplayPriority;
}

export type DisplayPriority = "MUSIC_RESPONSIVE_LIST_ITEM_COLUMN_DISPLAY_PRIORITY_HIGH";

export interface Text {
  runs: FluffyRun[];
}

export interface FluffyRun {
  text: string;
  navigationEndpoint?: PurpleNavigationEndpoint;
}

export interface PurpleNavigationEndpoint {
  clickTrackingParams: string;
  watchEndpoint?: OnTapWatchEndpoint;
  browseEndpoint?: BrowseEndpoint;
}

export type ItemHeight = "MUSIC_RESPONSIVE_LIST_ITEM_HEIGHT_TALL";

export interface MusicResponsiveListItemRendererMenu {
  menuRenderer: FluffyMenuRenderer;
}

export interface FluffyMenuRenderer {
  items: FluffyItem[];
  trackingParams: string;
  accessibility: AccessibilityPauseDataClass;
}

export interface FluffyItem {
  menuNavigationItemRenderer?: MenuItemRenderer;
  menuServiceItemRenderer?: MenuItemRenderer;
  toggleMenuServiceItemRenderer?: FluffyToggleMenuServiceItemRenderer;
}

export interface FluffyToggleMenuServiceItemRenderer {
  defaultText: BottomText;
  defaultIcon: Icon;
  defaultServiceEndpoint: DefaultServiceEndpoint;
  toggledText: BottomText;
  toggledIcon: Icon;
  toggledServiceEndpoint: ToggledServiceEndpoint;
  trackingParams: string;
}

export interface DefaultServiceEndpoint {
  clickTrackingParams: string;
  feedbackEndpoint?: FeedbackEndpoint;
  likeEndpoint?: FluffyLikeEndpoint;
}

export interface FeedbackEndpoint {
  feedbackToken: string;
}

export interface FluffyLikeEndpoint {
  status: PurpleStatus;
  target: AddToPlaylistEndpoint;
  actions?: Action[];
}

export interface Action {
  clickTrackingParams: string;
  musicLibraryStatusUpdateCommand: MusicLibraryStatusUpdateCommand;
}

export interface MusicLibraryStatusUpdateCommand {
  libraryStatus: string;
  addToLibraryFeedbackToken: string;
}

export type PurpleStatus = "LIKE";

export interface ToggledServiceEndpoint {
  clickTrackingParams: string;
  feedbackEndpoint?: FeedbackEndpoint;
  likeEndpoint?: TentacledLikeEndpoint;
}

export interface TentacledLikeEndpoint {
  status: FluffyStatus;
  target: AddToPlaylistEndpoint;
}

export type FluffyStatus = "INDIFFERENT";

export interface Overlay {
  musicItemThumbnailOverlayRenderer: OverlayMusicItemThumbnailOverlayRenderer;
}

export interface OverlayMusicItemThumbnailOverlayRenderer {
  background: Background;
  content: FluffyContent;
  contentPosition: ContentPosition;
  displayStyle: DisplayStyle;
}

export interface FluffyContent {
  musicPlayButtonRenderer: FluffyMusicPlayButtonRenderer;
}

export interface FluffyMusicPlayButtonRenderer {
  playNavigationEndpoint: PlayNavigationEndpoint;
  trackingParams: string;
  playIcon: Icon;
  pauseIcon: Icon;
  iconColor: number;
  backgroundColor: number;
  activeBackgroundColor: number;
  loadingIndicatorColor: number;
  playingIcon: Icon;
  iconLoadingColor: number;
  activeScaleFactor: number;
  buttonSize: ButtonSize;
  rippleTarget: RippleTarget;
  accessibilityPlayData: AccessibilityPauseDataClass;
  accessibilityPauseData: AccessibilityPauseDataClass;
}

export type ButtonSize = "MUSIC_PLAY_BUTTON_SIZE_SMALL";

export interface PlayNavigationEndpoint {
  clickTrackingParams: string;
  watchEndpoint?: OnTapWatchEndpoint;
  watchPlaylistEndpoint?: WatchPlaylistEndpoint;
}

export interface ShelfDivider {
  musicShelfDividerRenderer: MusicShelfDividerRenderer;
}

export interface MusicShelfDividerRenderer {
  hidden: boolean;
}

export interface Continuation {
  reloadContinuationData: ReloadContinuationData;
}

export interface ReloadContinuationData {
  continuation: string;
  clickTrackingParams: string;
}

export interface SectionListRendererHeader {
  chipCloudRenderer: ChipCloudRenderer;
}

export interface ChipCloudRenderer {
  chips: Chip[];
  collapsedRowCount: number;
  trackingParams: string;
  horizontalScrollable: boolean;
}

export interface Chip {
  chipCloudChipRenderer: ChipCloudChipRenderer;
}

export interface ChipCloudChipRenderer {
  style: Style;
  text: BottomText;
  navigationEndpoint: Endpoint;
  trackingParams: string;
  accessibilityData: AccessibilityPauseDataClass;
  isSelected: boolean;
  uniqueId: string;
}

export interface Style {
  styleType: string;
}

export interface ResponseContext {
  serviceTrackingParams: ServiceTrackingParam[];
  maxAgeSeconds: number;
}

export interface ServiceTrackingParam {
  service: string;
  params: Param[];
}

export interface Param {
  key: string;
  value: string;
}
