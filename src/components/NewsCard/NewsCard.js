import { useState } from 'react';
import newsImg from '../../images/image_08.png';
import './NewsCard.css';

export default function NewsCard({ isLogin, isSavedPage }) {
    const [isSave, setIsSave] = useState(false);
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
            <img src={newsImg} alt="news" className="newscard__img" />
            <article className="newscard__text-box">
                <time><p className="newscard__date">November 4, 2020</p></time>
                <h3 className="newscard__title">Everyone Needs a Special 'Sit Spot' in Nature</h3>
                <p className="newscard__text">Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...</p>
                <p className="newscard__sourse">treehugger</p>
            </article>
        </li>
    )
}