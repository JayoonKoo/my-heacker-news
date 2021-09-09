import { CONTENT_URL, NEWS_URL } from "../config";
import { NewsFeed } from "../type";

export class API {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  async request<ResponseType>(): Promise<ResponseType> {
    const response = await fetch(this.url);

    return (await response.json()) as ResponseType;
  }
}

export class NewsFeedApi extends API {
  constructor() {
    super(NEWS_URL);
  }

  async getData(): Promise<NewsFeed[]> {
    return this.request<NewsFeed[]>();
  }
}

export class NewsDetail extends API {
  constructor(id: string) {
    super(CONTENT_URL.replace("@id", id));
  }

  async getData(): Promise<NewsDetail> {
    return this.request<NewsDetail>();
  }
}
