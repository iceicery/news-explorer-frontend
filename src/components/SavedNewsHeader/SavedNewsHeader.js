import Navigation from '../Navigation/Navigation';
import './SavedNewsHeader.css';

export default function SaveNewsHeader({ handleLogout }) {
    return (
        <section className="savedHeader">
            <Navigation isLogin={true} isLight={true} handleLogout={handleLogout} />
            <p className="savedHeader__subtitle">Saved articles</p>
            <h3 className="savedHeader__title">Elise, you have 5 saved articles</h3>
            <div className="savedHeader__text-box"><p className="savedHeader__text">By keywords:</p><p className="savedHeader__text-bold"> Nature, Yellowstone, and 2 other</p></div>
        </section>
    )
}