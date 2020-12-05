import "./Navigation.css";
import logoutIcon from '../../images/logout.png';
import { Link } from "react-router-dom";
export default function Navigation({ isLight, isLogin }) {
    const navClass = isLight ? "nav nav-signin" : "nav";
    const titleClass = isLight ? "nav__title nav__login" : "nav__title";
    const placeClass = isLight ? "nav__place nav__login" : "nav__place";
    const signClass = isLight ? "nav__signin nav__signined" : "nav__signin";
    const placeClassSelect = isLight ? "nav__place-select" : "nav__place-select-light";
    const tempName = 'Elise';
    const signElt = isLogin ? <><p className="nav__login-text">{tempName}</p><img src={logoutIcon} alt="logout icon" className="nav__icon" /></>
        : 'Sign In';
    const placeElt =
        isLogin ? <
            div className="nav__place-box"><Link to="/" className="link"><p className={placeClass}>Home</p></Link><Link to="/saved-news" className="link"><p className={placeClassSelect}>Saved articles</p></Link></div>
            : <p className={placeClass}>Home</p>

    return (
        <nav className={navClass}>
            <div className="nav__container">
                <Link to="/" className="link"><p className={titleClass}>NewsExplorer</p></Link>
                <div className="nav__box">
                    <div>{placeElt}</div>
                    <button className={signClass}>{signElt}</button>
                </div>
            </div>
        </nav>
    )
}