import { useState } from 'react';
import './NewsCard.css';

export default function NewsCard({ isLogin, isSavedPage, card }) {
    const [isSave, setIsSave] = useState(false);
    const monthIndex = card.publishedAt.slice(5, 7);
    const month = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"][monthIndex - 1];
    const day = card.publishedAt.slice(8, 10);
    const year = card.publishedAt.slice(0, 4);
    const formatDate = month + " " + day + "," + year;

    function onClickSaveIcon() {
        if (!isSave) {
            setIsSave(true);
        } else {
            setIsSave(false);
        }
    }
    const iconClass = isLogin ?
        (isSavedPage ? "newscard__icon-trash" :
            (isSave ? "newscard__icon-blue" : "newscard__icon"))
        : "newscard__icon";
    const popupText = isLogin ? "Remove from saved" : "Sign in to save articles";
    const popupClass = isLogin ? (isSavedPage ? "newscard__popup" : "newscard-hidden") : "newscard__popup";
    const keywordClass = isSavedPage ? "newscard__keyword" : "newscard-hidden";
    return (
        <li className="newscard">
            <div className={iconClass} onClick={onClickSaveIcon}></div>
            <p className={popupClass}>{popupText}</p>
            <p className={keywordClass}>Nature</p>
            <img src={card.urlToImage} alt="news" className="newscard__img" />
            <article className="newscard__text-box">
                <p className="newscard__date">{formatDate}</p>
                <h3 className="newscard__title">{card.title}</h3>
                <p className="newscard__text">{card.description}</p>
                <p className="newscard__sourse">{card.source.name}</p>
            </article>
        </li>
    )
}