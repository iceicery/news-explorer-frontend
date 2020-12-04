import NewsCardList from "../NewsCardList/NewsCardList";
import './SearchNews.css';

export default function SearchNews({ isLogin }) {
    return (
        <section className="searchnews">
            <h2 className="searchnews__title">Search results</h2>
            <NewsCardList isLogin={isLogin} />
            <button className="searchnews__button">Show more</button>
        </section>
    )
}