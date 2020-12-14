import NewsApi from "./NewsApi";

const news_url = 'https://nomoreparties.co/news/v2/everything?';
const apiKey = "61a2215ddb5049b9a608970770a757dc";
const from = (new Date((Date.now() - 7 * 24 * 60 * 60 * 1000))).toString().slice(0, 10);
const to = (new Date(Date.now())).toString().slice(0, 10);
const pageSize = 100;

export const newsApi = new NewsApi({
    base_url: news_url,
    apiKey,
    from,
    to,
    pageSize,
})