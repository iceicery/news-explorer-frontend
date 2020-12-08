import Navigation from '../Navigation/Navigation';
import './SavedNewsHeader.css';

export default function SaveNewsHeader({ isLogin, name, handleLogout, handleNavOpen }) {
    return (
        <section className="savedHeader">
            <Navigation isLogin={isLogin} isLight={true} name={name} handleLogout={handleLogout} handleNavOpen={handleNavOpen} />
            <p className="savedHeader__subtitle">Saved articles</p>
            <h3 className="savedHeader__title">{name}, you have 5 saved articles</h3>
            <div className="savedHeader__text-box"><p className="savedHeader__text">By keywords: <span className="savedHeader__text-bold"> Nature, Yellowstone, and 2 other</span></p></div>
        </section>
    )
}