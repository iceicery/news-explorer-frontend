import Navigation from '../Navigation/Navigation';
import './SavedNewsHeader.css';

export default function SaveNewsHeader({ isLogin, handleLogout, handleNavOpen }) {
    return (
        <section className="savedHeader">
            <Navigation isLogin={isLogin} isLight={true} handleLogout={handleLogout} handleNavOpen={handleNavOpen} />
            <p className="savedHeader__subtitle">Saved articles</p>
            <h3 className="savedHeader__title">Elise, you have 5 saved articles</h3>
            <div className="savedHeader__text-box"><p className="savedHeader__text">By keywords:</p><p className="savedHeader__text-bold"> Nature, Yellowstone, and 2 other</p></div>
        </section>
    )
}