export default class MainApi {
    constructor(baseUrl) {
        this.url = baseUrl;
    }
    register({ email, password, name }) {
        return fetch(`${this.url}/signup`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email, password, name
            })
        })
            .then((res) => res ? res.json() : Promise.reject(`Error: ${res.status}`))
    }

    authorize({ email, password }) {
        return fetch(`${this.url}/signin`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email, password
            })
        })
            .then((res) => res.ok ? res.json() : Promise.reject(`Error: Incorrect email or password`))
            .then((data) => {
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    return data;
                }
                console.log(data);
            })
    }

    getUserInfo(token) {
        return fetch(`${this.url}/users/me`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
    }
    getSavedCard(token) {
        return fetch(`${this.url}/articles`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
    }
    postSavedCard({ token, keyword, title, text, date, source, link, image, owner }) {
        return fetch(`${this.url}/articles`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                keyword, title, text, date, source, link, image, owner,
            })
        })
            .then((res) => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
    }

    deleteSavedCard(token, articlesId) {
        return fetch(`${this.url}/articles/${articlesId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
    }

}