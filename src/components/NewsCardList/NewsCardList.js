import NewsCard from "../NewsCard/NewsCard";
import './NewsCardList.css';

export default function NewsCardList({ isLogin, isSavedPage, cards, topic, isMore, savedCards, handleSaveCards }) {
    return (
        <section className="newscardlist">
            <ul className="newscardlist__container">
                {!isSavedPage ?
                    (
                        !isMore ?
                            cards.slice(0, 3).map((card, i) => {
                                return <NewsCard key={i} isLogin={isLogin} isSavedPage={isSavedPage} card={card} topic={topic} savedCards={savedCards} handleSaveCards={handleSaveCards} />
                            }) : cards.map((card, i) => {
                                return <NewsCard key={i} isLogin={isLogin} isSavedPage={isSavedPage} card={card} topic={topic} savedCards={savedCards} handleSaveCards={handleSaveCards} />
                            })
                    ) : (
                        cards.map((card, i) => {
                            return <NewsCard key={i} isLogin={isLogin} isSavedPage={isSavedPage} card={card} savedCards={savedCards} handleSaveCards={handleSaveCards} />
                        })
                    )
                }
            </ul>
        </section>
    )
}