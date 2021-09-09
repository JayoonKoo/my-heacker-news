export interface NewsFeed {
  readonly id: number;
  readonly title: string;
  readonly user: string;
  readonly time_ago: string;
  readonly url: string;
  readonly comments_count: number;
  read?: boolean;
}
