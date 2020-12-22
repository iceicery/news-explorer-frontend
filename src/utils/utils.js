import NewsApi from "./NewsApi";
import MainApi from "./MainApi";

const NEWS_URL = 'https://nomoreparties.co/news/v2/everything?';
const APIKEY = "61a2215ddb5049b9a608970770a757dc";
const month = {
    Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
    Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12"
};
const FROM = (new Date((Date.now() - 7 * 24 * 60 * 60 * 1000))).toString().slice(0, 15);
const FROM_FORMAT = `${FROM.slice(11, 15)}-${month[FROM.slice(4, 7)]}-${FROM.slice(8, 10)}`;
const TO = (new Date(Date.now())).toString().slice(0, 15);
const TO_FORMAT = `${TO.slice(11, 15)}-${month[TO.slice(4, 7)]}-${TO.slice(8, 10)}`
const PAGESIZE = 100;
const MAIN_URL = 'https://api.newsfinder.students.nomoreparties.site';

export const newsApi = new NewsApi({
    base_url: NEWS_URL,
    apiKey: APIKEY,
    from: FROM_FORMAT,
    to: TO_FORMAT,
    pageSixe: PAGESIZE,
})

export const mainApi = new MainApi(MAIN_URL);