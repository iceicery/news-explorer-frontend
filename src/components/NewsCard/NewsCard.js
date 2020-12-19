import { useState } from 'react';
import './NewsCard.css';

export default function NewsCard({ isLogin, isSavedPage, card, topic, savedCards, handleSaveCards, handleDeleteCard, handleApiSaveCard, handleApiUnSaveCard }) {
    const [isSave, setIsSave] = useState(false);
    const [cardId, setCardId] = useState('');
    function formatDate() {
        const monthIndex = card.publishedAt.slice(5, 7);
        const month = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"][monthIndex - 1];
        const day = card.publishedAt.slice(8, 10);
        const year = card.publishedAt.slice(0, 4);
        return month + " " + day + "," + year;
    }
    const date = isSavedPage ? card.date : formatDate(card.publishedAt);
    const keyword = isSavedPage ? card.keyword : "";
    const text = isSavedPage ? card.text : card.description;
    const source = isSavedPage ? card.source : card.source.name;
    const image = isSavedPage ? card.image : card.urlToImage;
    function handleSaveState(state) {
        setIsSave(state);
    }
    function handleCardId(id) {
        setCardId(id);
    }

    function onClickSave() {
        const token = localStorage.getItem('token');
        const topic = localStorage.getItem('topic');
        if (!isSave) {
            handleApiSaveCard({
                token,
                keyword: topic,
                title: card.title,
                text: card.description,
                date: date,
                source: card.source.name,
                link: card.url,
                image: card.urlToImage,
                handleSaveState,
                handleCardId,
            })

        } else {
            handleApiUnSaveCard({ articlesId: cardId, handleSaveState })
        }
    }

    function onClickDelete() {
        handleDeleteCard({ articlesId: card._id });
    }
    const iconClass = isLogin ?
        (isSave ? "newscard__icon-blue" : "newscard__icon")
        : "newscard__icon";
    const popupText = isLogin ? "Remove from saved" : "Sign in to save articles";
    const popupClass = isLogin ? (isSavedPage ? "newscard__popup" : "newscard-hidden") : "newscard__popup";
    const keywordClass = isSavedPage ? "newscard__keyword" : "newscard-hidden";
    return (
        <li className="newscard">
            {isSavedPage ?
                <div className="newscard__icon-trash" onClick={onClickDelete}></div> :
                isLogin ?
                    <div className={iconClass} onClick={onClickSave}></div> :
                    <div className={iconClass}></div>

            }
            <p className={popupClass}>{popupText}</p>
            <p className={keywordClass}>{keyword}</p>
            <img src={image} alt="news" className="newscard__img" />
            <article className="newscard__text-box">
                <p className="newscard__date">{date}</p>
                <h3 className="newscard__title">{card.title}</h3>
                <p className="newscard__text">{text}</p>
                <p className="newscard__sourse">{source}</p>
            </article>
        </li>
    )
}