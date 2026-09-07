export interface NewsItem {
  country: string;
  headline: string;
  source: string;
  url: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export type SocialPlatform = "twitter" | "bluesky" | "mastodon";

export interface TweetAuthor {
  name: string;
  handle: string;
  avatar: string;
  verified: boolean;
}

export interface TweetMetrics {
  replies: number;
  reposts: number;
  likes: number;
  views: number;
}

export interface TweetMedia {
  images: string[];
}

export interface Tweet {
  id: string;
  platform: SocialPlatform;
  user: TweetAuthor;
  content: string;
  url: string;
  postedAt: string;
  lang: string;
  metrics: TweetMetrics;
  media: TweetMedia;
}

export interface TweetsFile {
  schemaVersion: number;
  updatedAt: string;
  items: Tweet[];
}
