import NewsCard from "../NewsCard/NewsCard";
import './NewsCardList.css';

export default function NewsCardList({ isLogin }) {
    return (
        <section className="newscardlist">
            <ul className="newscardlist__container">
                <NewsCard isLogin={isLogin} />
                <NewsCard isLogin={isLogin} />
                <NewsCard isLogin={isLogin} />
            </ul>
        </section>
    )
}