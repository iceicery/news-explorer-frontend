import "./Navigation.css";
import logoutIcon from '../../images/logout.png';
export default function Navigation({ isLogin }) {
    const navClass = isLogin ? "nav nav-signin" : "nav";
    const titleClass = isLogin ? "nav__title nav__login" : "nav__title";
    const placeClass = isLogin ? "nav__place nav__login" : "nav__place";
    const signClass = isLogin ? "nav__signin nav__signined" : "nav__signin";
    const tempName = 'Elise';
    const signElt = isLogin ? <><p className="nav__login-text">{tempName}</p><img src={logoutIcon} alt="logout icon" className="nav__icon" /></>
        : 'Sign In';
    const placeElt = isLogin ? <div className="nav__place-box"><p className={placeClass}>Home</p><p className="nav__place-select">Saved articles</p></div>
        : <p className={placeClass}>Home</p>

    return (
        <nav className={navClass}>
            <div className="nav__container">
                <p className={titleClass}>NewsExplorer</p>
                <div className="nav__box">
                    <div>{placeElt}</div>
                    <botton className={signClass}>{signElt}</botton>
                </div>
            </div>
        </nav>
    )
}