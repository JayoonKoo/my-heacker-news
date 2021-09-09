import { NewsFeedApi, NewsDetail } from "./core/Api";

const api = new NewsFeedApi();
api.getData().then(console.log);

const id = "13831370";
const detailApi = new NewsDetail(id);
detailApi.getData().then(console.log);
