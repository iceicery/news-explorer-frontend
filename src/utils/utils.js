import NewsApi from "./NewsApi";
import MainApi from "./MainApi";

const NEWS_URL = 'https://nomoreparties.co/news/v2/everything?';
const APIKEY = "61a2215ddb5049b9a608970770a757dc";
const FROM = (new Date((Date.now() - 7 * 24 * 60 * 60 * 1000))).toString().slice(0, 10);
const TO = (new Date(Date.now())).toString().slice(0, 10);
const PAGESIZE = 100;
const MAIN_URL = 'https://api.newsfinder.students.nomoreparties.site';

export const newsApi = new NewsApi({
    base_url: NEWS_URL,
    APIKEY,
    FROM,
    TO,
    PAGESIZE,
})

export const mainApi = new MainApi(MAIN_URL);