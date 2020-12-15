export default class MainApi {
    constructor({ baseUrl }) {
        this.url = baseUrl;
    }
    getUserInfo() {
        return fetch(`${this.url}/users/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.ok ? res.json : Promise.reject(`Error: ${res.status}`))
    }
    getSavedCard() {
        return fetch(`${this.url}/articles`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.ok ? res.json : Promise.reject(`Error: ${res.status}`))
    }
    postSavedCard({ keyword, title, text, date, source, link, image, owner }) {
        return fetch(`${this.url}/articles`, {
            method: "POST",
            headers: {
                "Conent-Type": "application/json",
            },
            body: JSON.stringify({
                keyword, title, text, date, source, link, image, owner,
            })
        })
            .then((res) => res.ok ? res.json : Promise.reject(`Error: ${res.status}`))
    }

    deleteSavedCard(articlesId) {
        return fetch(`${this.url}/articles/${articlesId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then((res) => res.ok ? res.json : Promise.reject(`Error: ${res.status}`))
    }

}