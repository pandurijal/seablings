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