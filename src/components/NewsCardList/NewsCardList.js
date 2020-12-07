import NewsCard from "../NewsCard/NewsCard";
import './NewsCardList.css';

export default function NewsCardList({ isLogin, isSavedPage }) {
    return (
        <section className="newscardlist">
            <ul className="newscardlist__container">
                <NewsCard isLogin={isLogin} isSavedPage={isSavedPage} />
                <NewsCard isLogin={isLogin} isSavedPage={isSavedPage} />
                <NewsCard isLogin={isLogin} isSavedPage={isSavedPage} />
            </ul>
        </section>
    )
}