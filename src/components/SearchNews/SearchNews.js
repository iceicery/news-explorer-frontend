import NewsCardList from "../NewsCardList/NewsCardList";
import './SearchNews.css';

export default function SearchNews({ handleApiUnSaveCard, handleApiSaveCard, isLogin, isSearchDone, isMore, topic, handleShowMore, cards, savedCards, handleSaveCards }) {
    const searchClass = isSearchDone ? "searchnews" : "searchnews-hidden";
    const buttonClass = !isMore ? "searchnews__button" : "searchnews-hidden";
    function onClickButton() {
        handleShowMore();
        localStorage.setItem('isMoreLocal', JSON.stringify(true));
    }
    return (
        <section className={searchClass}>
            <h2 className="searchnews__title">Search results</h2>
            <NewsCardList handleApiUnSaveCard={handleApiUnSaveCard} handleApiSaveCard={handleApiSaveCard} isLogin={isLogin} isSavedPage={false} topic={topic} cards={cards} savedCards={savedCards} isMore={isMore} handleSaveCards={handleSaveCards} />
            <button className={buttonClass} onClick={onClickButton}>Show more</button>
        </section>
    )
}