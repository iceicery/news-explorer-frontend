import NewsCardList from "../NewsCardList/NewsCardList";
import './SaveNews.css';

export default function SaveNews() {
    return (
        <section className="savenews">
            <h2 className="savenews__title">Search results</h2>
            <NewsCardList />
            <button className="savenews__button">Show more</button>
        </section>
    )
}