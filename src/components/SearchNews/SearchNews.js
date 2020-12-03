import NewsCardList from "../NewsCardList/NewsCardList";
import './SearchNews.css';

export default function SearchNews() {
    return (
        <section className="searchnews">
            <h2 className="searchnews__title">Search results</h2>
            <NewsCardList />
            <button className="searchnews__button">Show more</button>
        </section>
    )
}