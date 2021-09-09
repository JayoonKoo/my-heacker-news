import { NewsFeedApi, NewsDetail } from "./core/Api";

function apiTest(): void {
  const api = new NewsFeedApi();
  api.getData().then(console.log);

  const id = "13831370";
  const detailApi = new NewsDetail(id);
  detailApi.getData().then(console.log);
}

function routerTest(): void {}
