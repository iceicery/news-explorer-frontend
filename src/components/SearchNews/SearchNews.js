import NewsCardList from "../NewsCardList/NewsCardList";
import './SearchNews.css';

export default function SearchNews({ isLogin, isSearchDone, isMore, handleShowMore, cards }) {
    const searchClass = isSearchDone ? "searchnews" : "searchnews-hidden";
    const buttonClass = !isMore ? "searchnews__button" : "searchnews-hidden";
    function onClickButton() {
        handleShowMore();
    }
    return (
        <section className={searchClass}>
            <h2 className="searchnews__title">Search results</h2>
            <NewsCardList isLogin={isLogin} isSavedPage={false} cards={cards} isMore={isMore} />
            <button className={buttonClass} onClick={onClickButton}>Show more</button>
        </section>
    )
}