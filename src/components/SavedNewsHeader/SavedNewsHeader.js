import { useContext } from 'react';
import { CurrenUserContext } from '../../contexts/CurrentUserContext';
import Navigation from '../Navigation/Navigation';
import './SavedNewsHeader.css';

export default function SaveNewsHeader({ isLogin, savedCards, handleLogout, handleNavOpen }) {
    const currentUser = useContext(CurrenUserContext);
    const numberOfSave = savedCards.length;
    const keyword = []
    savedCards.map((card) => keyword.push(card.keyword));
    const keywordUniqe = Array.from(new Set(keyword));
    const keywordUniqeCount = [];
    keywordUniqe.map((item) =>
        keywordUniqeCount.push({ keyword: item, number: keyword.filter(i => i === item).length })
    )
    const keywordSorted = keywordUniqeCount.sort((a, b) => b.number - a.number);
    const numberOfKeywords = keywordUniqe.length;
    const getkeywordsText = () => {
        if (numberOfKeywords > 3) {
            return `${keywordSorted[0].keyword}, ${keywordSorted[1].keyword}, and ${numberOfKeywords - 2} other`
        }
        else if (numberOfKeywords === 3) {
            return `${keywordSorted[0].keyword}, ${keywordSorted[1].keyword}, ${keywordSorted[2].keyword}`
        } else if (numberOfKeywords === 2) {
            return `${keywordSorted[0].keyword}, ${keywordSorted[1].keyword}`
        } else {
            return `${keywordUniqe[0]}`
        }
    }
    const keywordsText = getkeywordsText();

    return (
        <section className="savedHeader">
            <Navigation isLogin={isLogin} isLight={true} handleLogout={handleLogout} handleNavOpen={handleNavOpen} />
            <p className="savedHeader__subtitle">Saved articles</p>
            <h3 className="savedHeader__title">{currentUser.name}, you have {numberOfSave} saved articles</h3>
            <div className="savedHeader__text-box"><p className="savedHeader__text">By keywords: <span className="savedHeader__text-bold">{keywordsText}</span></p></div>
        </section>
    )
}