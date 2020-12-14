export default class NewsApi {
    constructor({ base_url, apiKey, from, to, pageSize }) {
        this.url = base_url;
        this.apikey = apiKey;
        this.from = from;
        this.to = to;
        this.pageSize = pageSize;
    }

    requeireNews(request) {
        const apiKey = "61a2215ddb5049b9a608970770a757dc";
        const from = (new Date((Date.now() - 7 * 24 * 60 * 60 * 1000))).toString().slice(0, 10);
        const to = (new Date(Date.now())).toString().slice(0, 10);
        const pageSize = 100;
        const url = 'https://nomoreparties.co/news/v2/everything?';
        return fetch(`${url}q=${request}&from=${from}&to=${to}&pageSize=${pageSize}&apiKey=${apiKey}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => { return res.ok ? res.json() : Promise.reject({ 'error': res.status }) })
    }
}
