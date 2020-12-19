import NewsCard from "../NewsCard/NewsCard";
import './NewsCardList.css';

export default function NewsCardList({ isLogin, isSavedPage, cards, topic, isMore, savedCards, handleSaveCards, handleDeleteCard, handleApiSaveCard, handleApiUnSaveCard }) {
    return (
        <section className="newscardlist">
            <ul className="newscardlist__container">
                {!isSavedPage ?
                    (
                        !isMore ?
                            cards.slice(0, 3).map((card, i) => {
                                return <NewsCard key={i} isLogin={isLogin} isSavedPage={isSavedPage} card={card} topic={topic} savedCards={savedCards} handleSaveCards={handleSaveCards} handleApiSaveCard={handleApiSaveCard} handleApiUnSaveCard={handleApiUnSaveCard} />
                            }) : cards.map((card, i) => {
                                return <NewsCard key={i} isLogin={isLogin} isSavedPage={isSavedPage} card={card} topic={topic} savedCards={savedCards} handleSaveCards={handleSaveCards} handleApiSaveCard={handleApiSaveCard} handleApiUnSaveCard={handleApiUnSaveCard}/>
                            })
                    ) : (
                        cards.map((card, i) => {
                            return <NewsCard key={i} isLogin={isLogin} isSavedPage={isSavedPage} card={card} savedCards={savedCards} handleSaveCards={handleSaveCards} handleDeleteCard={handleDeleteCard} />
                        })
                    )
                }
            </ul>
        </section>
    )
}