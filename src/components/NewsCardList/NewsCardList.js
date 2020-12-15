import NewsCard from "../NewsCard/NewsCard";
import './NewsCardList.css';

export default function NewsCardList({ isLogin, isSavedPage, cards, isMore }) {
    return (
        <section className="newscardlist">
            <ul className="newscardlist__container">
                {
                    !isMore ? cards.slice(0, 3).map((card, i) => {
                        return <NewsCard key={i} isLogin={isLogin} isSavedPage={isSavedPage} card={card} />
                    }) : cards.map((card, i) => {
                        return <NewsCard key={i} isLogin={isLogin} isSavedPage={isSavedPage} card={card} />
                    })
                }
            </ul>
        </section>
    )
}