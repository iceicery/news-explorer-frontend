export default class NewsApi {
    constructor({ base_url, apiKey, from, to, pageSize }) {
        this.url = base_url;
        this.apiKey = apiKey;
        this.from = from;
        this.to = to;
        this.pageSize = pageSize;
    }

    requeireNews(request) {
        return fetch(`${this.url}q=${request}&from=${this.from}&to=${this.to}&pageSize=${this.pageSize}&apiKey=${this.apiKey}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => { return res.ok ? res.json() : Promise.reject({ 'error': res.status }) })
    }
}
